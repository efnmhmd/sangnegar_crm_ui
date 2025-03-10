import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@components/Button';
import { Icon } from '@iconify/react/dist/iconify.js';
import FilterImage from '@assets/images/filter.svg?react';
import ListImage from '@assets/images/list.svg?react';

type FilterBar = {
	setShowFilterSection: Dispatch<SetStateAction<boolean>>;
	setGridList: Dispatch<SetStateAction<boolean>>;
	gridList: boolean;
	showFilterSection: boolean;
};

const FilterBar = ({
	setShowFilterSection,
	setGridList,
	gridList,
	showFilterSection,
}: FilterBar) => {
	return (
		<div className="flex items-center gap-4 px-2">
			<Button
				onClick={() => setShowFilterSection((pre) => !pre)}
				size="md"
				className={twMerge(
					showFilterSection ? 'bg-primary' : 'bg-black/45',
				)}
			>
				<FilterImage className="size-5" />
			</Button>
			<Button
				size="md"
				onClick={() => setGridList(true)}
				className={twMerge(gridList ? 'bg-primary' : 'bg-black/45')}
			>
				<Icon icon="hugeicons:menu-square" className="size-5" />
			</Button>
			<Button
				size="md"
				onClick={() => setGridList(false)}
				className={twMerge(gridList ? 'bg-black/45' : 'bg-primary')}
			>
				<ListImage className="size-5" />
			</Button>
		</div>
	);
};

export default FilterBar;
