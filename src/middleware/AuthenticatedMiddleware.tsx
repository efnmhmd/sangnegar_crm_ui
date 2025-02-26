import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import useUserProfileQuery from '@helpers/hooks/queries/useUserProfileQuery';
import useAuthStore from '@/store/useAuthStore';

const AuthenticatedMiddleware = () => {
	const { access } = useAuthStore();
	const navigate = useNavigate();
	// const profileQuery = useUserProfileQuery();

	useEffect(() => {
		if (!access) {
			navigate('/auth');
		} else {
			// profileQuery.refetch();
		}
	}, [access]);

	// useEffect(() => {
	// 	if (profileQuery.isFetched && !profileQuery.isSuccess) {
	// 		navigate('/login');
	// 	}
	// }, [profileQuery.isFetched]);

	return <Outlet />;
};

export default AuthenticatedMiddleware;
