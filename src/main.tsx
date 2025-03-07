import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthenticatedMiddleware from './middleware/AuthenticatedMiddleware';
import GuestMiddleware from './middleware/GuestMiddleware';
import ErrorBoundary from './pages/ErrorBoundary';
import { authenticated, guest } from './router';
import '@assets/css/index.css';

const router = createBrowserRouter([
	{
		element: <GuestMiddleware />,
		errorElement: <ErrorBoundary />,
		children: guest,
	},
	{
		element: <AuthenticatedMiddleware />,
		errorElement: <ErrorBoundary />,
		children: authenticated,
	},
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback={<p>loading ...</p>}>
			<QueryClientProvider client={queryClient}>
				<SkeletonTheme baseColor="#202020" highlightColor="#444">
					<RouterProvider router={router} />
				</SkeletonTheme>
				<ToastContainer
					hideProgressBar={true}
					closeButton={false}
					transition={Flip}
					autoClose={3000}
					position="top-right"
					closeOnClick
				/>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Suspense>
	</React.StrictMode>,
);
