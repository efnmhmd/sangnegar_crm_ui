import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Error404 from './Error404';
import ErrorOther from './ErrorOther';

const ErrorBoundary = () => {
	const error = useRouteError();

	return (
		<div className="flex h-dvh flex-col py-28">
			logo
			{isRouteErrorResponse(error) ? <Error404 /> : <ErrorOther />}
		</div>
	);
};

export default ErrorBoundary;
