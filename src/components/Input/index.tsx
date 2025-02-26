import React, { forwardRef } from 'react';

type InputPropsType = {
	placeholder?: string;
	type?: 'text' | 'password' | 'number';
	icon?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputPropsType>(
	(
		{ placeholder = 'مقداری وارد کنید ...', type = 'text', icon, ...res },
		ref,
	) => {
		return (
			<div className="relative flex items-center justify-between rounded-full border border-light-white px-3 py-4 duration-200 focus-within:border-primary">
				<input
					ref={ref}
					className="w-full bg-transparent outline-none"
					placeholder={placeholder}
					type={type}
					{...res}
				/>
				{icon && (
					<div className="absolute left-1 top-1/2 flex aspect-square h-[80%] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary p-1 text-black">
						{icon}
					</div>
				)}
			</div>
		);
	},
);

export default Input;
