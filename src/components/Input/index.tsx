import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type InputPropsType = {
	placeholder?: string;
	type?: 'text' | 'password' | 'number';
	icon?: React.ReactNode;
};

function Input({
	placeholder = 'مقداری وارد کنید ...',
	type = 'text',
	icon,
}: InputPropsType) {
	return (
		<div className="relative flex items-center justify-between rounded-full border border-light-white px-3 py-4 duration-200 focus-within:border-primary">
			<input
				className="w-full bg-transparent outline-none"
				placeholder={placeholder}
				type={type}
			/>
			{icon && (
				<div className="absolute left-1 top-1/2 flex aspect-square h-[80%] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary p-1 text-black">
					{icon}
				</div>
			)}
		</div>
	);
}

export default Input;
