import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CoopList from '@components/CoopList';
import Filter from '@components/Filter';
import SlabList from '@components/SlabList';
import FilterBar from './FilterBar';
import InfoBar from './InfoBar';

export default function Home() {
	const [showFilterSection, setShowFilterSection] = useState<boolean>(true);

	const [activeTab, setActiveTab] = useState<number>(0);

	const [gridList, setGridList] = useState<boolean>(true);

	return (
		<div className="flex items-start justify-between gap-2">
			<Filter
				isOpen={showFilterSection}
				active={activeTab}
				setActive={setActiveTab}
			/>
			{/* cards */}
			<div
				className={twMerge(
					'grid flex-[4] gap-2',
					showFilterSection ? 'grid-cols-3' : 'grid-cols-4',
				)}
			>
				<FilterBar
					gridList={gridList}
					setGridList={setGridList}
					setShowFilterSection={setShowFilterSection}
					showFilterSection={showFilterSection}
				/>

				<InfoBar showFilterSection={showFilterSection} />

				<div
					className={twMerge(
						'col-span-full grid gap-4',
						showFilterSection
							? 'grid-cols-2 md:grid-cols-3'
							: 'grid-cols-3 md:grid-cols-4',
					)}
				>
					{activeTab === 0 ? (
						<CoopList gridList={gridList} />
					) : (
						<SlabList gridList={gridList} />
					)}
				</div>
			</div>
		</div>
	);
}
