import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className="flex grow flex-col items-center justify-center">
			<div className="flex w-full shrink grow items-center justify-center">
				err
			</div>
			<h1 className="font-title mt-[4.29rem] shrink-0 text-[3rem] font-[550] leading-[100%] tracking-[-0.06rem] text-primary-power">
				Page not found
			</h1>
			<p className="text-primary-hood mt-[1.19rem] shrink-0 text-xl leading-[127%]	">
				The page you are looking for doesn't exist
			</p>
			<Link to="/">
				<button className="mt-[2.44rem] w-[9.8rem] shrink-0">
					Home
				</button>
			</Link>
		</div>
	);
};

export default Error404;
