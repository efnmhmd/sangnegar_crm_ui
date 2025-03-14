import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import useSlabQuery from '@hooks/query/useSlabQuery';
import { StoneType } from '@/types/Stone.type';

function SlabList({ gridList, selectable = false, data, isLoading }) {
	return (
		<Fragment>
			{isLoading.isPending &&
				gridList &&
				Array.from({ length: 8 }).map((_, index) => (
					<div key={index} className="h-[10rem] w-[30%]">
						<Skeleton className="h-full" />
					</div>
				))}

			{isLoading.isPending && !gridList && (
				<div>
					<Skeleton
						count={3}
						containerClassName="flex-1 w-[10rem]"
						className="h-[10rem] w-[10rem]"
					/>
				</div>
			)}

			{data?.length > 0 && !isLoading ? (
				data?.map((card: StoneType) =>
					gridList ? (
						<GridStoneCard
							card={card}
							key={card.id}
							isSlab
							selectable={selectable}
						/>
					) : (
						<LineStoneCard
							card={card}
							key={card.id}
							isSlab
							selectable={selectable}
						/>
					),
				)
			) : (
				<div className="flex-1 text-center text-3xl font-semibold">
					آیتمی برای نمایش وجود ندارد
				</div>
			)}
		</Fragment>
	);
}

export default SlabList;
