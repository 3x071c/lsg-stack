import type { LoaderFunction } from "remix";
import { Center, CircularProgress } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "remix";
import { useLogin, authorize, invalidate } from "~feat/auth";
import { respond } from "~lib/response";

type LoaderData = {
	status: number;
};
const getLoaderData = async (request: Request): Promise<LoaderData> => {
	if (await authorize(request, { ignore: true, lock: true, required: false }))
		throw await invalidate(request);
	return { status: 200 };
};
export const loader: LoaderFunction = async ({ request }) =>
	respond<LoaderData>(await getLoaderData(request));

export default function Logout(): JSX.Element {
	const { logout, loading } = useLogin();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading) {
			const callback = async () => {
				await logout();
				navigate("/", { replace: true });
			};
			void callback();
		}
	}, [loading, logout, navigate]);

	return (
		<Center minW="100vw" minH="100vh" p={2}>
			<CircularProgress isIndeterminate capIsRound />
		</Center>
	);
}
