declare type AppLoadContextType = { env: AppLoadContextEnvType };
declare type AppLoadContextEnvType = {
	[key: string]: KVNamespace | string | undefined;
};
