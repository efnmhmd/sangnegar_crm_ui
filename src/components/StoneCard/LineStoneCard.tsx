import { Fragment } from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Checkbox from '@components/Checkbox';
import RadialSeparators from '@components/RedialSeperators';
import { Icon } from '@iconify/react/dist/iconify.js';
import useSlabStore from '@store/useSlabStore';
import { StoneCardType } from '@/types/StoneCard.type';
import DiagramImage from '@assets/images/diagram.svg?react';
import GraphImage from '@assets/images/graph.svg?react';
import ResizeImage from '@assets/images/resize.svg?react';
import ScanImage from '@assets/images/scan.svg?react';
import stoneImage from '@assets/images/stone.png';

function LineStoneCard({ card, isSlab, selectable = false }: StoneCardType) {
	const navigate = useNavigate();

	const { selectSlab } = useSlabStore();

	return (
		<Fragment>
			<div
				onClick={() => {
					if (!isSlab) {
						navigate(`/coop/${card.id}`);
					}
				}}
				className={twMerge(
					'relative flex flex-1 items-center overflow-hidden rounded-3xl bg-black/30 p-2',
					isSlab ? 'cursor-default' : 'cursor-pointer',
				)}
			>
				{selectable && (
					<div className="absolute left-3 top-3">
						<Checkbox onChange={selectSlab} slabId={card.id} />
					</div>
				)}
				<div
					className={twMerge(
						'absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/60',
						card.status === 'reserved' ||
							card.status === 'non-existent'
							? 'z-10 opacity-100'
							: 'pointer-events-none -z-10 opacity-0',
					)}
				>
					<div
						className={twMerge(
							'rounded-xl border-2 px-4 py-2 text-xl font-semibold tracking-wider',
							card.status === 'reserved' &&
								'border-dark-orange bg-dark-orange/30',
							card.status === 'non-existent' &&
								'border-dark-red bg-dark-red/40',
						)}
					>
						{card.status === 'reserved' && 'رزور شده'}
						{card.status === 'non-existent' && 'ناموجود'}
					</div>
				</div>
				<div className="flex w-full items-center justify-between">
					<div className="mx-auto flex h-[8rem] w-[10rem] items-center justify-center overflow-hidden rounded-md p-4">
						{isSlab ? (
							<PhotoView src={card.image}>
								<img
									src={card.image}
									className="h-full w-full rounded-lg object-fill"
									alt="stone"
									onError={({ currentTarget }) => {
										currentTarget.src = stoneImage;
									}}
								/>
							</PhotoView>
						) : (
							<img
								src={card.image}
								className="h-full w-full rounded-lg object-fill"
								alt="stone"
								onError={({ currentTarget }) => {
									currentTarget.src = stoneImage;
								}}
							/>
						)}
					</div>
					<div className="flex-1">
						<div className="flex items-end gap-3">
							<Icon
								icon="mynaui:mountain"
								className="mb-1 size-7"
							/>
							<span className="text-sm font-light leading-[21.4px]">
								{card.name}
							</span>
						</div>
						<h2 className="py-4 text-xl font-medium">
							{card.name}
						</h2>
						<div className="w-full">
							<div className="grid grid-cols-4 gap-1 rounded-3xl p-2 text-white/50">
								<div className="relative flex items-center justify-center gap-4 px-2 py-3 pb-1">
									<GraphImage className="size-5 shrink-0" />
									<span className="truncate text-lg">
										{isSlab ? card.type : card.amount}
									</span>
									<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
									<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
								</div>
								<div className="relative flex items-center justify-center gap-4 px-2 py-3 pb-1">
									<ScanImage className="size-5 shrink-0" />
									<span className="truncate text-lg">
										{card.id}
									</span>
									<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
									<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
								</div>
								<div className="relative flex items-center justify-center gap-4 px-2 py-3 pb-1 text-center">
									<DiagramImage className="size-5 shrink-0" />
									<span className="truncate text-lg">
										{isSlab ? card.height : card.coop_id}
									</span>
									<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
									<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
									<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
								</div>
								<div className="relative flex items-center justify-center gap-4 px-2 py-3 pb-1 text-center">
									<ResizeImage className="size-5 shrink-0" />
									<span className="truncate text-lg">
										{isSlab ? card.width : card.thickness}
									</span>
									<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[90%] -translate-x-1/2 rounded-md bg-white/50" />
								</div>
							</div>
						</div>
					</div>
				</div>
				{card.amount && (
					<div className="absolute left-4 top-4 ms-auto flex items-center justify-center">
						<CircularProgressbarWithChildren
							value={(card.amount / card.total) * 100}
							className="w-10"
							text={String(
								new Number(card.amount).toLocaleString('fa-ir'),
							)}
							strokeWidth={5}
							styles={buildStyles({
								// strokeLinecap: 'round',
								textSize: '40px',
								pathColor:
									card.amount > 0 ? '#80FF25' : '#A92222',
								textColor:
									card.amount > 0 ? '#80FF25' : '#A92222',
							})}
						>
							<RadialSeparators
								count={10}
								style={{
									background: '#06162c',
									width: '4px',
									height: `2.5px`,
								}}
							/>
						</CircularProgressbarWithChildren>
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default LineStoneCard;
