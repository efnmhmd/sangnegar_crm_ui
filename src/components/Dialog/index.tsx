import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Dialog as HDialog,
} from '@headlessui/react';

type DialogPropsType = {
	isOpen: number;
	header?: React.ReactNode;
	children: React.ReactNode;
	setIsOpen: React.Dispatch<React.SetStateAction<number>>;
	animation?: 'toLeft' | 'scale';
};

function Dialog({
	isOpen,
	setIsOpen,
	header,
	children,
	animation = 'scale',
}: DialogPropsType) {
	const animationType = {
		scale: 'mx-auto h-[85vh] w-[790px]',
		toLeft: 'data-[closed]:-translate-x-10 ms-auto h-[80vh] w-[790px]',
	};

	return (
		<HDialog
			open={Boolean(isOpen)}
			onClose={() => setIsOpen(0)}
			className="relative z-50"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 backdrop-blur-sm duration-300 ease-out data-[closed]:opacity-0"
			/>
			<div
				onClick={() => setIsOpen(0)}
				className={twMerge(
					'container fixed inset-0 mx-auto mt-24 flex px-4',
				)}
			>
				<DialogPanel
					transition
					className={twMerge(
						'space-y-4 p-4 font-vazir text-white backdrop-blur-lg duration-300 ease-out data-[closed]:opacity-0',
						'no-scrollbar self-start overflow-auto rounded-e-[24px] rounded-s-[32px] border-2 border-primary',
						animationType[animation],
					)}
				>
					{header && (
						<DialogTitle className="text-lg font-bold">
							{header}
						</DialogTitle>
					)}
					<div dir="rtl" className="">
						{children}
					</div>
				</DialogPanel>
			</div>
		</HDialog>
	);
}

export default Dialog;
