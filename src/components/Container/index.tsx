import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
	return (
		<div
			className={twMerge(
				'ld:max-w-[1300px] container mx-auto px-4',
				className,
			)}
		>
			{children}
		</div>
	);
}

export default Container;
