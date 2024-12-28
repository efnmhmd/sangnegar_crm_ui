import { twMerge } from 'tailwind-merge';
import {
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Dialog as HDialog,
} from '@headlessui/react';

function Dialog({ isOpen, setIsOpen, header, children }) {
	return (
		<HDialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className="relative z-50"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 backdrop-blur-sm duration-300 ease-out data-[closed]:opacity-0"
			/>
			<div
				className={twMerge(
					'container fixed inset-0 mx-auto mt-24 flex items-start justify-end px-4',
				)}
			>
				<DialogPanel
					transition
					className={twMerge(
						'space-y-4 p-4 font-vazir text-white backdrop-blur-lg duration-300 ease-out data-[closed]:-translate-x-10 data-[closed]:opacity-0',
						'no-scrollbar h-[80vh] w-[790px] overflow-auto rounded-e-[24px] rounded-s-[32px] border-2 border-primary',
					)}
				>
					<DialogTitle className="text-lg font-bold">
						{header}
					</DialogTitle>
					<div dir="rtl" className="">
						{children}
					</div>
				</DialogPanel>
			</div>
		</HDialog>
	);
}

export default Dialog;
