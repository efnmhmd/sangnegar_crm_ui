import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonPropsType = {
	withBorder?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'auto';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
	withBorder = false,
	className,
	children,
	size = 'md',
	...rest
}: ButtonPropsType) {
	const sizeStyle = {
		sm: 'size-8 rounded-[0.875rem]',
		md: 'size-11 rounded-[1.062rem]',
		lg: 'size-14 rounded-[1.062rem]',
		auto: 'w-fit rounded-[1.062rem]',
	};

	return (
		<button
			className={twMerge(
				'flex shrink-0 items-center justify-center border-2',
				withBorder ? 'border-primary' : 'border-transparent',
				sizeStyle[size],
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
