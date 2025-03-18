import queryString from 'query-string';
import { Fragment, useState } from 'react';
import { StoneCardType } from '@/types/StoneCard.type';
import arrowImage from '@assets/images/arrow.svg';
import calendarImage from '@assets/images/calendar.svg';
import slabImage from '@assets/images/cartImage.jpg';
import checkImage from '@assets/images/check.svg';
import diagramImage from '@assets/images/diagram.svg';
import graphImage from '@assets/images/graph.svg';
import qcImage from '@assets/images/qc.svg';
import resizeImage from '@assets/images/resize.svg';
import scanImage from '@assets/images/scan.svg';
import stoneImage from '@assets/images/stone.png';
import typeImage from '@assets/images/type.svg';

function CoopDetail({ card }: StoneCardType) {
	const [showSlabDetail, setShowSlabDetail] = useState<boolean>(false);

	const parsed = queryString.parse(location.search);

	const isSlab = parsed.show === 'slab';

	return (
		<div className="">
			<div className="flex items-start justify-between gap-[2.2812rem] border-b px-[1.651rem] py-6">
				<div className="mx-auto h-[11rem] flex-1 rounded-2xl border-2">
					<img
						src={card.image}
						className="h-full w-full object-contain"
						alt="stone"
						onError={({ currentTarget }) => {
							currentTarget.src = stoneImage;
						}}
					/>
				</div>
				<div className="flex-[2]">
					<div className="relative grid grid-cols-2 gap-4 rounded-3xl border p-2 text-white shadow-inner">
						<div className="flex items-center justify-start gap-4 px-2 py-2">
							<img src={graphImage} alt="" className="size-8" />
							<span className="text-xl font-medium">
								{card.stone_type}
							</span>
						</div>
						<div className="flex items-center justify-end gap-4 px-2 py-2">
							<span className="text-xl font-medium">
								LM.4L:210
							</span>
							<img src={scanImage} alt="" className="size-8" />
						</div>
						<div className="flex items-center justify-start gap-4 px-2 py-2 text-center">
							<img src={diagramImage} alt="" className="size-8" />
							<span className="text-xl font-medium">
								{card.color}
							</span>
						</div>
						<div className="flex items-center justify-end gap-4 px-2 py-2 text-center">
							<span className="text-xl font-medium">
								{card.thickness}
							</span>
							<img src={resizeImage} alt="" className="size-8" />
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
					<div className="mt-[0.865rem] text-sm font-light">
						{card.description}
					</div>
				</div>
			</div>
			{showSlabDetail ? (
				<Fragment>
					<div className="flex items-center justify-between py-[2.3rem]">
						<div className="flex items-center gap-4">
							<button
								onClick={() => setShowSlabDetail(false)}
								className="h-[3.125rem] rounded-[1.125rem] border-2 border-white px-4 py-2 text-lg font-normal duration-200 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-gray-200"
							>
								<img
									src={arrowImage}
									className="object-contain"
									alt="stone"
								/>
							</button>
							<button
								disabled
								className="h-[3.125rem] rounded-[1.125rem] border-2 border-white px-4 py-2 text-lg font-normal duration-200 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-gray-200"
							>
								ثبت سفارش
							</button>
						</div>
						<button className="h-[3.125rem] rounded-[1.125rem] border-2 border-white px-4 py-2 text-lg font-normal duration-200 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-gray-200">
							<img
								src={checkImage}
								className="object-contain"
								alt="stone"
							/>
						</button>
					</div>
					<div className="flex items-stretch gap-[2.125rem]">
						<div className="size-[21.625rem] overflow-hidden rounded-[2rem] outline outline-offset-4">
							<div className="mx-auto h-full border-2">
								<img
									src={slabImage}
									className="h-full w-full object-cover"
									alt="stone"
								/>
							</div>
						</div>
						<div className="flex-1 overflow-hidden rounded-[2rem] pe-4 ps-10 outline outline-1 outline-offset-4 outline-white/15">
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={typeImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									مرمریت
								</p>
							</div>
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={diagramImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									سفید
								</p>
							</div>
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={graphImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									پالیش
								</p>
							</div>
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={calendarImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									1402/12/01 - 1403/07/01
								</p>
							</div>
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={resizeImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									300 x 300 CM
								</p>
							</div>
							<div className="relative flex items-center justify-end gap-[0.46375rem] border-b border-b-white/15 py-2.5 before:absolute before:-right-[1.55rem] before:top-[110%] before:h-2/4 before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-x before:border-white/15 after:absolute after:-right-7 after:top-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-white/15 after:outline after:outline-1 after:outline-offset-2 after:outline-white/15 last:border-none last:before:hidden">
								<div className="mx-auto size-7 h-full">
									<img
										src={qcImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
								<p className="flex-1 text-xl font-medium">
									شکستگی
								</p>
							</div>
						</div>
					</div>
				</Fragment>
			) : isSlab ? (
				<div className="mx-auto max-h-[25rem] flex-1 items-stretch overflow-hidden py-8">
					<img
						src={card.image}
						className="h-full w-full object-cover"
						alt="stone"
					/>
				</div>
			) : (
				<Fragment>
					<div className="flex items-center justify-between py-[2.3rem]">
						<button className="rounded-[1.125rem] border-2 border-white px-4 py-2 text-lg font-normal duration-200 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-gray-200">
							ارسال به حسابداری
						</button>
					</div>
					<div className="grid grid-cols-4 gap-[1.4375rem]">
						{Array.from({ length: 7 }).map((_, i) => (
							<button
								onClick={() => setShowSlabDetail(true)}
								key={i}
								className="size-[9.875rem] overflow-hidden rounded-[2rem] outline outline-offset-4"
							>
								<div className="mx-auto h-full border-2">
									<img
										src={slabImage}
										className="h-full w-full object-cover"
										alt="stone"
									/>
								</div>
							</button>
						))}
						<button
							onClick={() => setShowSlabDetail(true)}
							className="relative size-[9.875rem] overflow-hidden rounded-[2rem] outline outline-offset-4"
						>
							<div className="mx-auto h-full border-2">
								<img
									src={slabImage}
									className="h-full w-full object-cover"
									alt="stone"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black/50 text-4xl">
								10+
							</div>
						</button>
					</div>
				</Fragment>
			)}
		</div>
	);
}

export default CoopDetail;
