import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { twMerge } from 'tailwind-merge';
import RadialSeparators from '@components/RedialSeperators';
import { Icon } from '@iconify/react/dist/iconify.js';
import { StoneCardType } from '@/types/StoneCardType';
import { StoneType } from '@/types/StoneType';
import diagramImage from '@assets/images/diagram.svg';
import graphImage from '@assets/images/graph.svg';
import resizeImage from '@assets/images/resize.svg';
import scanImage from '@assets/images/scan.svg';
import stoneImage from '@assets/images/stone.png';

function GridStoneCard({ card }: StoneCardType) {
	return (
		<div
			className={twMerge(
				'relative overflow-hidden rounded-3xl bg-black/30 p-2',
			)}
		>
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
				<Icon icon="mynaui:mountain" className="size-8" />
				<span>{card.mine_name}</span>
				<div className="ms-auto flex items-center justify-center">
					<CircularProgressbarWithChildren
						value={(card.amount / card.total) * 100}
						className="w-10"
						text={String(
							new Number(card.amount).toLocaleString('fa-ir'),
						)}
						strokeWidth={5}
						styles={buildStyles({
							strokeLinecap: 'butt',
							textSize: '40px',
							pathColor: card.amount > 0 ? '#80FF25' : '#A92222',
							textColor: card.amount > 0 ? '#80FF25' : '#A92222',
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
			</div>

			<div>
				<img
					src={stoneImage}
					className="h-full w-full object-contain"
					alt="stone"
				/>
			</div>

			<h2 className="py-4 text-center">{card.name}</h2>

			<div className="relative grid grid-cols-2 gap-4 rounded-3xl border-[1px] border-black p-2 text-white/50 shadow-inner shadow-black">
				<div className="flex items-center justify-start gap-4 px-2 py-2">
					<img
						src={graphImage}
						alt=""
						className="size-5 opacity-50"
					/>
					<span className="text-sm">{card.type}</span>
				</div>
				<div className="flex items-center justify-end gap-4 px-2 py-2">
					<span className="text-sm">LM.4L:210</span>
					<img src={scanImage} alt="" className="size-5 opacity-50" />
				</div>
				<div className="flex items-center justify-start gap-4 px-2 py-2 text-center">
					<img
						src={diagramImage}
						alt=""
						className="size-5 opacity-50"
					/>
					<span className="text-sm">{card.color}</span>
				</div>
				<div className="flex items-center justify-end gap-4 px-2 py-2 text-center">
					<span className="text-sm">{card.thickness}</span>
					<img
						src={resizeImage}
						alt=""
						className="size-5 opacity-50"
					/>
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
