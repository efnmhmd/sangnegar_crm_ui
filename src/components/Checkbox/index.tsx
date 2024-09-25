import React, { useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify/react/dist/iconify.js';

type CheckboxPropsType = {
	label?: string;
};

function Checkbox({ label }: CheckboxPropsType) {
	const id = useId();
	const [isChecked, setIsChecked] = useState(0);

	return (
		<div className="flex items-center justify-center gap-2">
			<div
				className={twMerge(
					'border-light-white flex size-5 cursor-pointer items-center justify-center rounded border',
				)}
				onClick={() => setIsChecked((pre) => (pre === 0 ? 1 : 0))}
			>
				<Icon
					icon="pajamas:check-xs"
					className={twMerge(
						'size-4 duration-200',
						isChecked ? 'scale-100' : 'scale-0',
					)}
				/>
			</div>
			{label && (
				<label htmlFor={id} className="cursor-pointer select-none">
					{label}
				</label>
			)}
			<input
				type="checkbox"
				hidden
				id={id}
				value={isChecked}
				onChange={() => setIsChecked((pre) => (pre === 0 ? 1 : 0))}
			/>
		</div>
	);
}

export default Checkbox;
