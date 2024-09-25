import React from 'react';
import { twMerge } from 'tailwind-merge';

type LanguageItemPropsType = {
	label: string;
	icon: React.ReactNode;
	isActive?: boolean;
};

function LanguageItem({ label, icon, isActive }: LanguageItemPropsType) {
	return (
		<div
			className={twMerge(
				'flex flex-1 basis-[150px] cursor-pointer items-center space-x-3 space-x-reverse rounded-full p-1 pe-4 duration-200 hover:bg-primary',
				isActive ? 'bg-primary' : 'bg-dark-gray',
			)}
		>
			{icon}
			<p>{label}</p>
		</div>
	);
}

export default LanguageItem;
