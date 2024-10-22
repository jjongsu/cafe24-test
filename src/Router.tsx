import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingLottie from '@components/LoadingLottie';

const BoardPage = lazy(() => import('@pages/board'));
const AuthPage = lazy(() => import('@pages/auth'));
const RedirectPage = lazy(() => import('@pages/redirect'));
const ErrorPage = lazy(() => import('@components/ErrorComponent'));

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: 'board',
                element: <BoardPage />,
            },
            {
                path: 'auth',
                element: <AuthPage />,
            },
            {
                path: 'redirect',
                element: <RedirectPage />,
            },
            {
                path: 'error',
                element: <ErrorPage />,
            },
            {
                path: '',
                element: <BoardPage />,
                hasErrorBoundary: true,
                // errorElement: <ErrorPage />,
                // loader: () => {
                //     throw new Error();
                // },
            },
            {
                path: '*',
                element: <></>,
                hasErrorBoundary: true,
                errorElement: <ErrorPage />,
                loader: () => {
                    throw new Error();
                },
            },
        ],
    },
]);

function Router() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingLottie hasDim={false} />}>
                <RouterProvider router={router} />
            </Suspense>
        </QueryClientProvider>
    );
}

export default Router;
