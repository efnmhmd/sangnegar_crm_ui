import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { twMerge } from 'tailwind-merge';
import RadialSeparators from '@components/RedialSeperators';
import { Icon } from '@iconify/react/dist/iconify.js';
import { StoneCardType } from '@/types/StoneCard.type';
import diagramImage from '@assets/images/diagram.svg';
import graphImage from '@assets/images/graph.svg';
import resizeImage from '@assets/images/resize.svg';
import scanImage from '@assets/images/scan.svg';
import stoneImage from '@assets/images/stone.png';

function LineStoneCard({ card }: StoneCardType) {
	return (
		<div
			className={twMerge(
				'relative col-span-full flex items-center overflow-hidden rounded-3xl bg-black/30 p-2',
			)}
		>
			<div
				className={twMerge(
					'absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/60',
					card.info.status === 'reserved' ||
						card.info.status === 'non-existent'
						? 'z-10 opacity-100'
						: 'pointer-events-none -z-10 opacity-0',
				)}
			>
				<div
					className={twMerge(
						'rounded-xl border-2 px-4 py-2 text-xl font-semibold tracking-wider',
						card.info.status === 'reserved' &&
							'border-dark-orange bg-dark-orange/30',
						card.info.status === 'non-existent' &&
							'border-dark-red bg-dark-red/40',
					)}
				>
					{card.info.status === 'reserved' && 'رزور شده'}
					{card.info.status === 'non-existent' && 'ناموجود'}
				</div>
			</div>

			<div className="flex w-full items-center justify-between">
				<div className="mx-auto flex h-[11rem] w-[13.6875rem] items-center justify-center overflow-hidden rounded-md p-4">
					<img
						src={card.image}
						className="h-full w-full rounded-lg object-fill"
						alt="stone"
						onError={({ currentTarget }) => {
							currentTarget.src = stoneImage;
						}}
					/>
				</div>

				<div className="flex-1">
					<div className="flex items-end gap-3">
						<Icon icon="mynaui:mountain" className="mb-1 size-7" />
						<span className="text-sm font-light leading-[21.4px]">
							{card.name}
						</span>
					</div>
					<h2 className="py-4 text-xl font-medium">{card.name}</h2>
					<div className="w-full">
						<div className="flex items-end justify-between gap-1 rounded-3xl p-2 text-white/50">
							<div className="relative flex flex-1 items-center justify-center gap-4 px-2 py-3 pb-1">
								<img
									src={graphImage}
									alt=""
									className="size-6 opacity-50"
								/>
								<span className="text-lg">
									{card.info.type}
								</span>

								<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
								<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
							</div>
							<div className="relative flex flex-1 items-center justify-center gap-4 px-2 py-3 pb-1">
								<img
									src={scanImage}
									alt=""
									className="size-6 opacity-50"
								/>
								<span className="text-lg">LM.4L:210</span>

								<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
								<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
							</div>
							<div className="relative flex flex-1 items-center justify-center gap-4 px-2 py-3 pb-1 text-center">
								<img
									src={diagramImage}
									alt=""
									className="size-6 opacity-50"
								/>
								<span className="text-lg">{card.color}</span>

								<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[85%] -translate-x-1/2 rounded-md bg-white/50" />
								<div className="absolute left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute -left-1 top-[calc(50%+5px)] size-2 h-[60%] w-[1px] -translate-y-1/2 rounded-md bg-white/50" />
								<div className="absolute left-0 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
							</div>
							<div className="relative flex flex-1 items-center justify-center gap-4 px-2 py-3 pb-1 text-center">
								<img
									src={resizeImage}
									alt=""
									className="size-6 opacity-50"
								/>
								<span className="text-lg">
									{card.thickness}
								</span>

								<div className="absolute left-1/2 top-0 size-2 h-[1px] w-[90%] -translate-x-1/2 rounded-md bg-white/50" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute left-4 top-4 ms-auto flex items-center justify-center">
				<CircularProgressbarWithChildren
					value={(card.info.amount / card.info.total) * 100}
					className="w-10"
					text={String(
						new Number(card.info.amount).toLocaleString('fa-ir'),
					)}
					strokeWidth={5}
					styles={buildStyles({
						// strokeLinecap: 'round',
						textSize: '40px',
						pathColor: card.info.amount > 0 ? '#80FF25' : '#A92222',
						textColor: card.info.amount > 0 ? '#80FF25' : '#A92222',
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
		</div>
	);
}

export default LineStoneCard;
