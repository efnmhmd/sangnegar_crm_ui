import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@components/Button';
import SortImage from '@assets/images/sort.svg?react';

function InfoBar() {
	const [sortBy, setSortBy] = useState(0);

	return (
		<div
			className={twMerge(
				'flex flex-1 items-center justify-between rounded-[1.062rem] bg-black/45 p-1 px-2',
			)}
		>
			<div className="flex items-center gap-3">
				<Button size="auto" className="text-white/40">
					<div className="flex items-center gap-2">
						<SortImage className="size-5" />
					</div>
				</Button>
				<Button
					onClick={() => setSortBy(0)}
					size="auto"
					className={twMerge(
						'px-2 text-sm font-normal hover:bg-white/20',
						sortBy === 0 && 'bg-white/20',
					)}
				>
					جدیدترین
				</Button>
				<Button
					onClick={() => setSortBy(1)}
					className={twMerge(
						'px-2 text-sm font-normal hover:bg-white/20',
						sortBy === 1 && 'bg-white/20',
					)}
					size="auto"
				>
					ویژه
				</Button>
			</div>
			<div className="flex items-center gap-2 text-sm font-normal">
				<div className="space-x-1 space-x-reverse">
					<span>اسلب‌ها</span>
					<span>:</span>
					<span>{new Number(29).toLocaleString('fa-ir')}</span>
				</div>
				<div className="space-x-1 space-x-reverse">
					<span>کوب‌ها</span>
					<span>:</span>
					<span>{new Number(155).toLocaleString('fa-ir')}</span>
				</div>
			</div>
		</div>
	);
}

export default InfoBar;
