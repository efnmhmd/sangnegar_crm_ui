import { useRouteError } from 'react-router-dom';

const ErrorOther = () => {
	const error = useRouteError() as Error;

	return (
		<div className="flex grow flex-col items-center justify-center">
			<div className="flex w-full shrink grow items-center justify-center">
				err
			</div>
			{import.meta.env.DEV ? (
				<pre className="my-4 overflow-y-auto text-wrap py-4 text-sm font-light">
					{error.stack}
				</pre>
			) : (
				<>
					<h1 className="font-title mt-[4.29rem] shrink-0 text-[3rem] font-[550] leading-[100%] tracking-[-0.06rem] text-primary-power">
						Error!
					</h1>
					<p className="text-primary-hood mt-[1.19rem] shrink-0 text-xl leading-[127%]	">
						Internal server error
					</p>
				</>
			)}
		</div>
	);
};

export default ErrorOther;
