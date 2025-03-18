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
					<div key={index} className="h-[10rem] w-[30%]">
						<Skeleton className="h-full" />
					</div>
				))}

			{coopQuery.isPending && !gridList && (
				<div>
					<Skeleton
						count={3}
						containerClassName="flex-1 w-[10rem]"
						className="h-[10rem] w-[10rem] flex-1"
					/>
				</div>
			)}

			{coopQuery.data?.data?.map((card) =>
				gridList ? (
					<GridStoneCard card={card} key={card.id} />
				) : (
					<LineStoneCard card={card} key={card.id} />
				),
			)}
		</Fragment>
	);
}

export default CoopList;
