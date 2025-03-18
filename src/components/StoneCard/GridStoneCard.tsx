import { Fragment, useState } from 'react';
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
import useSlabStore from '@store/useSlabStore';
import { StoneCardType } from '@/types/StoneCard.type';
import DiagramImage from '@assets/images/diagram.svg?react';
import GraphImage from '@assets/images/graph.svg?react';
import MountainImage from '@assets/images/mountain.svg?react';
import ResizeImage from '@assets/images/resize.svg?react';
import ScanImage from '@assets/images/scan.svg?react';
import stoneImage from '@assets/images/stone.png';

function GridStoneCard({
	card,
	isSlab = false,
	selectable = false,
}: StoneCardType) {
	const navigate = useNavigate();

	const { selectSlab } = useSlabStore();

	return (
		<div
			onClick={() => {
				if (!isSlab) {
					navigate(`/coop/${card.id}`);
				}
			}}
			className={twMerge(
				'relative w-[22%] overflow-hidden rounded-3xl bg-black/30 p-2',
				!isSlab && 'cursor-pointer',
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
					card.status === 'reserved' || card.status === 'non-existent'
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
			<div className="flex items-center gap-2">
				<MountainImage className="size-6 text-white/65" />
				<span>{card.name}</span>
				{card.amount && (
					<div className="ms-auto flex items-center justify-center">
						<CircularProgressbarWithChildren
							value={(card.amount / card.total) * 100}
							className="w-8"
							text={String(
								new Number(card.amount).toLocaleString('fa-ir'),
							)}
							strokeWidth={5}
							styles={buildStyles({
								strokeLinecap: 'butt',
								textSize: '40px',
								pathColor:
									card.amount > 0 ? '#80FF25' : '#A92222',
								textColor:
									card.amount > 0 ? '#80FF25' : '#A92222',
							})}
						>
							<RadialSeparators
								count={12}
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
			<div className="mx-auto h-[8rem] w-[10rem]">
				{isSlab ? (
					<PhotoView src={card.image}>
						<img
							src={card.image}
							className="h-full w-full object-contain"
							alt="stone"
							onError={({ currentTarget }) => {
								currentTarget.src = stoneImage;
							}}
						/>
					</PhotoView>
				) : (
					<img
						src={card.image}
						className="h-full w-full object-contain"
						alt="stone"
						onError={({ currentTarget }) => {
							currentTarget.src = stoneImage;
						}}
					/>
				)}
			</div>
			<h2 className="py-4 text-center">{card.name}</h2>
			<div className="relative grid grid-cols-2 gap-4 rounded-3xl border-[1px] border-black p-2 text-white/50 shadow-inner shadow-black">
				<div className="flex items-center justify-start gap-4 truncate px-2 py-2">
					<GraphImage className="size-5 shrink-0" />
					<span className="text-sm font-normal">
						{isSlab ? card.type : card.amount}
					</span>
				</div>
				<div className="flex items-center justify-end gap-4 truncate px-2 py-2">
					<span className="text-sm font-normal">{card.id}</span>
					<ScanImage className="size-5 shrink-0" />
				</div>
				<div className="flex items-center justify-start gap-4 truncate px-2 py-2 text-center">
					<DiagramImage className="size-5 shrink-0" />
					<span className="text-sm font-normal">
						{isSlab ? card.height : card.coop_id}
					</span>
				</div>
				<div className="flex items-center justify-end gap-4 truncate px-2 py-2 text-center">
					<span className="text-sm font-normal">
						{isSlab ? card.width : card.thickness}
					</span>
					<ResizeImage className="size-5 shrink-0" />
				</div>
				<div className="pointer-events-none absolute left-0 top-0 h-full w-full">
					<div className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
					<div className="absolute left-2 top-1/2 size-2 h-[1px] w-[40%] -translate-y-1/2 bg-white/50" />
					<div className="absolute right-2 top-1/2 size-2 h-[1px] w-[40%] -translate-y-1/2 bg-white/50" />
					<div className="absolute left-[51%] top-2 size-2 h-[30%] w-[1px] -translate-x-1/2 bg-white/50" />
					<div className="absolute left-[49%] top-2 size-2 h-[30%] w-[1px] -translate-x-1/2 bg-white/50" />
					<div className="absolute bottom-2 left-[51%] size-2 h-[30%] w-[1px] -translate-x-1/2 bg-white/50" />
					<div className="absolute bottom-2 left-[49%] size-2 h-[30%] w-[1px] -translate-x-1/2 bg-white/50" />
				</div>
			</div>
		</div>
	);
}

export default GridStoneCard;
