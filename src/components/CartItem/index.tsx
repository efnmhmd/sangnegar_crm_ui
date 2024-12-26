import { useRef, useState } from 'react';
import stoneImage from '@assets/images/cartImage.jpg';
import checkIcon from '@assets/images/check.svg';
import trashIcon from '@assets/images/trash.svg';

function CartItem() {
	const [suggestPrice, setSuggestPrice] = useState<string | number>(0);

	return (
		<div className="relative rounded-[20px] bg-black/35 p-4">
			<div className="border-light-red absolute right-0 top-0 flex size-12 cursor-pointer items-center justify-center rounded-[18px] border bg-black/65 backdrop-blur-sm duration-200 hover:bg-white/50">
				<img src={trashIcon} alt="trash" />
			</div>

			<div className="flex items-start gap-4">
				<div className="aspect-square flex-1 overflow-hidden rounded-[10px]">
					<img
						src={stoneImage}
						className="h-full w-full object-cover"
						alt="stone-image"
					/>
				</div>
				<div className="flex-[2]">
					<h1 className="text-[22px] font-medium leading-[33.63px]">
						اسلب گرانیت اوشن دارک
					</h1>
					<ul className="font-base mt-2 space-y-2 text-white/50">
						<li className="flex items-center gap-2">
							<span className="size-3 rounded-full bg-white/50"></span>
							<span>کوپ گرانیت اوشن دارک</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="size-3 rounded-full bg-white/50"></span>
							<span>کد: </span>
							<span>LM.4L:210</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="size-3 rounded-full bg-white/50"></span>
							<span>سفید | پالیش | 300CM</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-2 flex flex-row-reverse items-center gap-4">
				<input
					dir="ltr"
					className="peer/check max-w-[120px] rounded-lg border border-transparent bg-black/50 p-2 text-left outline-none duration-200 focus:border-primary"
					value={suggestPrice}
					onChange={(e) => setSuggestPrice(e.target.value)}
				/>

				<div className="ms-auto cursor-pointer opacity-0 peer-focus/check:opacity-100">
					<img src={checkIcon} alt="check" />
				</div>

				<p className="text-base font-light leading-[24.46px]">
					قیمت پیشنهادی (تومان)
				</p>
			</div>
		</div>
	);
}

export default CartItem;
