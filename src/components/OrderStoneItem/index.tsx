import { twMerge } from 'tailwind-merge';
import stoneImage from '@assets/images/cartImage.jpg';

function OrderStoneItem({}) {
	return (
		<div
			className={twMerge(
				'relative rounded-[20px] p-1.5',
				'w-[244px] border border-gray-500',
			)}
		>
			<div className="flex items-stretch gap-2">
				<div className="basis-20 overflow-hidden rounded-[10px] bg-red-400">
					<img
						src={stoneImage}
						className="h-full w-full object-cover"
						alt="stone-image"
					/>
				</div>
				<div className="">
					<h1 className="text-sm font-medium">
						اسلب گرانیت اوشن دارک
					</h1>
					<ul className="mt-0.5 space-y-0.5 text-[12px] text-white/50">
						<li className="flex items-center gap-2">
							<span className="size-2 rounded-full bg-white/50"></span>
							<span>کوپ گرانیت اوشن دارک</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="size-2 rounded-full bg-white/50"></span>
							<span>کد: </span>
							<span>LM.4L:210</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="size-2 rounded-full bg-white/50"></span>
							<span>سفید | پالیش | 300CM</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="mt-4 flex items-center justify-center gap-2 border-t border-t-gray-500 pt-2 text-center">
				<p className="text-base font-bold">2.300.000</p>
				<p className="text-base font-medium">تومان</p>
			</div>
		</div>
	);
}

export default OrderStoneItem;
