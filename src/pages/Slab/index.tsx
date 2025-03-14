import { useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from '@components/Button';
import SlabList from '@components/SlabList';
import { useSlabsQUery } from '@hooks/query/useSlabsQuery';
import FilterBar from '../Home/FilterBar';
import InfoBar from '../Home/InfoBar';

export default function Slab() {
	const [showFilterSection, setShowFilterSection] = useState<boolean>(true);
	const [gridList, setGridList] = useState<boolean>(true);

	const { pathname } = useLocation();

	const id = pathname.split('/').filter((str) => str.length > 0)?.[1];

	const slabsQUery = useSlabsQUery(id);

	const buttons = useMemo(
		() => [
			{
				label: 'دانلود PDF',
				action: '#',
			},
		],
		[],
	);

	return (
		<div className="flex items-start justify-between gap-2">
			<div className={twMerge('flex-[4] space-y-3')}>
				<div className="flex">
					<FilterBar
						hideFilterButton
						gridList={gridList}
						setGridList={setGridList}
						setShowFilterSection={setShowFilterSection}
						showFilterSection={showFilterSection}
					/>

					<InfoBar />
				</div>
				<div className="flex flex-wrap items-center gap-2 px-2">
					{buttons.map((button, i) => (
						<Button
							key={i}
							withBorder
							className="px-6 hover:bg-primary hover:text-white"
							size="auto"
						>
							{button.label}
						</Button>
					))}
				</div>
				<div
					className={twMerge(
						'flex flex-wrap gap-4',
						gridList ? 'flex-row' : 'flex-col',
					)}
				>
					<SlabList
						gridList={gridList}
						selectable
						data={slabsQUery.data?.data}
						isLoading={slabsQUery.isPending}
					/>
				</div>
			</div>
		</div>
	);
}
