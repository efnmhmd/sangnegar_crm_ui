import React from 'react';
import CartItem from '@components/CartItem';
import { Icon } from '@iconify/react/dist/iconify.js';
import printerImage from '@assets/images/printer.svg';

function Cart() {
	return (
		<div className="h-full w-full rounded-lg border-2 border-primary bg-black/35 p-3">
			<div className="flex items-center gap-4 border-b border-gray-700 pb-2">
				<h1 className="text-2xl font-medium leading-[36.69px]">
					سبد خرید
				</h1>
				<span className="me-auto text-base font-medium leading-[25px]">
					( 3 آیتم )
				</span>
				<div className="flex size-14 cursor-pointer items-center justify-center rounded-[17px] duration-200 hover:bg-black/30">
					<img src={printerImage} alt="print-cart" />
				</div>
			</div>

			<div className="flex items-center gap-4 border-b border-gray-700 py-4">
				<CartItem />
				<CartItem />
				<CartItem />
			</div>

			<div className="gap-4 border-b border-gray-700 py-4">
				<h1 className="text-[24px] font-medium">انتخاب نحوه پرداخت</h1>

				<form className="mt-8 space-y-4">
					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								توضیحات
							</label>
							<div className="rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="border-none bg-transparent outline-none"
									defaultValue="به صورت نقد"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								تاریخ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-center outline-none"
									defaultValue="۱۴۰۱/۰۸/۲۶"
								/>
								<div>
									<Icon
										icon="oui:token-date"
										className="size-8"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								مبلغ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-end outline-none"
									defaultValue="۵۱۲.۰۰۰.۰۰۰"
								/>
								<div>
									<Icon icon="bx:dollar" className="size-8" />
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								توضیحات
							</label>
							<div className="rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="border-none bg-transparent outline-none"
									defaultValue="به صورت نقد"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								تاریخ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-center outline-none"
									defaultValue="۱۴۰۱/۰۸/۲۶"
								/>
								<div>
									<Icon
										icon="oui:token-date"
										className="size-8"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								مبلغ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-end outline-none"
									defaultValue="۵۱۲.۰۰۰.۰۰۰"
								/>
								<div>
									<Icon icon="bx:dollar" className="size-8" />
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								توضیحات
							</label>
							<div className="rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="border-none bg-transparent outline-none"
									defaultValue="به صورت نقد"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								تاریخ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-center outline-none"
									defaultValue="۱۴۰۱/۰۸/۲۶"
								/>
								<div>
									<Icon
										icon="oui:token-date"
										className="size-8"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="ms-2 text-xs">
								مبلغ
							</label>
							<div className="flex items-center justify-center rounded-xl border border-white/50 bg-black/25 p-2">
								<input
									type="text"
									className="flex-1 border-none bg-transparent text-end outline-none"
									defaultValue="۵۱۲.۰۰۰.۰۰۰"
								/>
								<div>
									<Icon icon="bx:dollar" className="size-8" />
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className="mt-4 flex items-center gap-4">
					<button className="flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-primary p-1 px-4 duration-200 hover:bg-primary hover:text-white">
						<span className="text-[24px]">+</span>
						<span className="text-[20px] font-normal">
							سطر جدید
						</span>
					</button>
					<button className="border-light-red hover:bg-light-red flex cursor-pointer items-center justify-between gap-2 rounded-2xl border px-4 py-1 duration-200 hover:text-white">
						<span className="text-[24px]">-</span>
						<span className="text-[20px] font-normal">حذف سطر</span>
					</button>
				</div>
			</div>

			<div className="py-4">
				<button className="ms-auto flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-primary p-2 px-4 duration-200 hover:bg-primary hover:text-white">
					<span className="text-[20px] font-normal">
						ارسال جهت بررسی
					</span>
				</button>
			</div>
		</div>
	);
}

export default Cart;
