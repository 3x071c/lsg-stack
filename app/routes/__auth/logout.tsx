import { Center, CircularProgress } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, json, LoaderFunction } from "remix";
import { useLogin, authorize, logout as invalidate } from "~app/auth";

const getLoaderData = async (request: Request) => {
	if (await authorize(request, { required: false }))
		throw await invalidate(request);
	return {};
};
type LoaderData = Awaited<ReturnType<typeof getLoaderData>>;
export const loader: LoaderFunction = async ({ request }) =>
	json<LoaderData>(await getLoaderData(request));

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

export const url = "/logout";