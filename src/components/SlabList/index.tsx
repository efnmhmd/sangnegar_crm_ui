import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import useSlabQuery from '@hooks/query/useSlabQuery';
import { StoneType } from '@/types/Stone.type';
import { StoneCardType } from '@/types/StoneCard.type';

function SlabList({ gridList }) {
	const slabQuery = useSlabQuery();
	return (
		<Fragment>
			{slabQuery.isPending &&
				gridList &&
				Array.from({ length: 8 }).map((_, index) => (
					<Skeleton key={index} className="h-[10rem] w-full" />
				))}

			{slabQuery.isPending && !gridList && (
				<Skeleton
					count={3}
					containerClassName="col-span-full"
					className="col-span-3 h-[10rem]"
				/>
			)}

			{slabQuery.data?.data?.map((card: StoneType) =>
				gridList ? (
					<GridStoneCard card={card} key={card.coop_id} />
				) : (
					<LineStoneCard card={card} key={card.coop_id} />
				),
			)}
		</Fragment>
	);
}

export default SlabList;
