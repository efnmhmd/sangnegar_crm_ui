import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import TwoFactorAuth from './pages/TwoFactorAuth';
import { AuthenticatedRouteType, GuestRouteType } from './types/Route.type';

const MainLayout = lazy(() => import('./layout/MainLayout'));

export const guest: GuestRouteType = [];

export const authenticated: AuthenticatedRouteType = [
	{ path: '/', element: <Navigate to="/store" /> },
	{ path: '*', element: <Navigate to="/store" /> },
	{ path: '/auth', element: <Navigate to="/auth/login" /> },

	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},

			{
				path: 'forgot-password',
				element: <ForgotPassword />,
			},

			{
				path: 'two-factor-auth',
				element: <TwoFactorAuth />,
			},
		],
	},

	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: 'store',
				element: <Home />,
			},
		],
	},
];
