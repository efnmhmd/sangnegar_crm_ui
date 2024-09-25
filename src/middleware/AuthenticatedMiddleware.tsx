import { Outlet } from 'react-router-dom';

const AuthenticatedMiddleware = () => {
	return <Outlet />;
};

export default AuthenticatedMiddleware;
