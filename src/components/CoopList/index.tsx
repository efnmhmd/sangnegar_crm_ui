import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import useCoopQuery from '@hooks/query/useCoopsQuery';

function CoopList({ gridList }) {
	const coopQuery = useCoopQuery();
	return (
		<Fragment>
			{coopQuery.isPending &&
				gridList &&
				Array.from({ length: 8 }).map((_, index) => (
					<Skeleton key={index} className="h-[10rem] w-full" />
				))}

			{coopQuery.isPending && !gridList && (
				<Skeleton
					count={3}
					containerClassName="col-span-full"
					className="col-span-3 h-[10rem]"
				/>
			)}

			{coopQuery.data?.data?.map((card) =>
				gridList ? (
					<GridStoneCard card={card} key={card.coop_id} />
				) : (
					<LineStoneCard card={card} key={card.coop_id} />
				),
			)}
		</Fragment>
	);
}

export default CoopList;
