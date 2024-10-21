import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    //TODO: missing queryfn 잡아내면 다시 삭제
    queryCache: new QueryCache({
        onError(e, q) {
            console.log(e, q);
            // if (typeof e === 'string') {
            //     // postErrorLog({
            //     //     errorHref: location.href,
            //     //     learnerToken: learnerTokenStore.get(),
            //     //     errorMessage: e + q.queryKey,
            //     //     webVersion: version,
            //     //     errorSource: 'ErrorBoundary',
            //     //     errorStack: JSON.stringify(q.meta)
            //     // });
            // }
        },
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            networkMode: 'offlineFirst',
        },
        mutations: {
            networkMode: 'offlineFirst',
        },
    },
});
