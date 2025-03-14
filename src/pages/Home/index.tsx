import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CoopList from '@components/CoopList';
import Filter from '@components/Filter';
import SlabList from '@components/SlabList';
import useSlabQuery from '@hooks/query/useSlabQuery';
import FilterBar from './FilterBar';
import InfoBar from './InfoBar';

export default function Home() {
	const [showFilterSection, setShowFilterSection] = useState<boolean>(true);

	const [activeTab, setActiveTab] = useState<number>(0);

	const [gridList, setGridList] = useState<boolean>(true);

	const slabQuery = useSlabQuery(activeTab === 1);

	return (
		<div className="flex items-start justify-between gap-2">
			<Filter
				isOpen={showFilterSection}
				active={activeTab}
				setActive={setActiveTab}
			/>
			{/* cards */}
			<div className={twMerge('flex-[4] space-y-3')}>
				<div className="flex">
					<FilterBar
						gridList={gridList}
						setGridList={setGridList}
						setShowFilterSection={setShowFilterSection}
						showFilterSection={showFilterSection}
					/>

					<InfoBar />
				</div>
				<div
					className={twMerge(
						'flex flex-wrap gap-4',
						gridList ? 'flex-row' : 'flex-col',
					)}
				>
					{activeTab === 0 ? (
						<CoopList gridList={gridList} />
					) : (
						<SlabList
							gridList={gridList}
							data={slabQuery.data?.data}
							isLoading={slabQuery.isPending}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
