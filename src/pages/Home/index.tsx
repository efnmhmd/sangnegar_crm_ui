import queryString from 'query-string';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useActionData, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import CoopList from '@components/CoopList';
import Filter from '@components/Filter';
import SlabList from '@components/SlabList';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import useCoopQuery from '@hooks/query/useCoopsQuery';
import useSlabQuery from '@hooks/query/useSlabQuery';
import { Icon } from '@iconify/react/dist/iconify.js';
import { StoneType } from '@/types/Stone.type';

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
					showFilterSection ? 'grid-cols-4' : 'grid-cols-5',
				)}
			>
				{/* filters */}
				<div className="col-span-1 flex items-center justify-between px-2">
					<button
						onClick={() => setShowFilterSection((pre) => !pre)}
						className="flex items-center justify-center gap-4 rounded-2xl bg-black/45 p-4 px-8 duration-200 hover:bg-primary"
					>
						<Icon icon="rivet-icons:filter" className="size-6" />
						<span>فیلتر</span>
					</button>
					<button
						onClick={() => setGridList(true)}
						className={twMerge(
							'rounded-2xl bg-black/45 p-4 duration-200 hover:bg-primary',
							gridList ? 'bg-primary' : 'bg-black/45',
						)}
					>
						<Icon icon="hugeicons:menu-square" className="size-6" />
					</button>
					<button
						onClick={() => setGridList(false)}
						className={twMerge(
							'rounded-2xl p-4 duration-200 hover:bg-primary',
							gridList ? 'bg-black/45' : 'bg-primary',
						)}
					>
						<Icon
							icon="mingcute:list-check-3-line"
							className="size-6"
						/>
					</button>
				</div>
				<div
					className={twMerge(
						'flex items-center justify-between rounded-2xl bg-black/45 p-2',
						showFilterSection ? 'col-span-3' : 'col-span-4',
					)}
				>
					<div className="flex items-center gap-3">
						<button className="flex items-center gap-2 rounded-lg p-2 hover:bg-white/20">
							<Icon icon="ph:sort-ascending" className="size-6" />
							<span>براساس</span>
						</button>
						<button className="rounded-lg p-2 hover:bg-white/20">
							جدیدترین ها
						</button>
						<button className="rounded-lg p-2 hover:bg-white/20">
							ویژه
						</button>
					</div>
					<div className="flex items-center gap-3">
						<div className="space-x-1 space-x-reverse">
							<span>تعداد اسلب</span>
							<span>:</span>
							<span>
								{new Number(29).toLocaleString('fa-ir')}
							</span>
						</div>
						<div className="space-x-1 space-x-reverse">
							<span>تعداد کوب</span>
							<span>:</span>
							<span>
								{new Number(155).toLocaleString('fa-ir')}
							</span>
						</div>
					</div>
				</div>
				{/* card */}

				{activeTab === 0 ? (
					<CoopList gridList={gridList} />
				) : (
					<SlabList gridList={gridList} />
				)}

				{/* {coopQuery.isPending &&
					activeTab === 0 &&
					gridList &&
					Array.from({ length: 8 }).map((_, index) => (
						<Skeleton key={index} className="h-[10rem] w-full" />
					))}

				{coopQuery.isPending && !gridList && activeTab === 0 && (
					<Skeleton
						count={3}
						containerClassName="col-span-full"
						className="col-span-3 h-[10rem]"
					/>
				)}

				{activeTab === 0 &&
					coopQuery.data?.data?.map((card) =>
						gridList ? (
							<GridStoneCard card={card} key={card.coop_id} />
						) : (
							<LineStoneCard card={card} key={card.coop_id} />
						),
					)} */}
			</div>
		</div>
	);
}
