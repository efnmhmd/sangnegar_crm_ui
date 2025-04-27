import React, { ReactNode, useMemo, useState } from 'react';
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import CartItem from '@components/CartItem';
import Dialog from '@components/Dialog';
import OrderStoneItem from '@components/OrderStoneItem';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import Table from '@components/Tabel';
import TableSmall from '@components/TabelSmall';
import { Icon } from '@iconify/react/dist/iconify.js';
import { createColumnHelper } from '@tanstack/react-table';
import avatarImage from '@assets/images/avatar.svg';
import userIcon from '@assets/images/avatar.svg';
import backIcon from '@assets/images/back.svg';
import editIcon from '@assets/images/edit.svg';
import idCardIcon from '@assets/images/idCard.svg';
import mailIcon from '@assets/images/mail.svg';
import phoneIcon from '@assets/images/phone.svg';
import reagentIcon from '@assets/images/reagent.svg';
import receiptIcon from '@assets/images/receipt.svg';

type Order = {
	id: number;
	name: string;
	orderCode: number;
	amount: number;
	status: string;
	owner: string;
	phone: string;
};

type Payment = {
	id: number;
	description: string;
	date: string;
	price: string;
	documents: boolean | null;
};

const ordersListData: Order[] = [
	{
		id: 1,
		name: 'کوپ مرمر 2201 - اسلب های 2301 - 2401 ...',
		orderCode: 324567,
		amount: 3,
		status: 'ثبت شده',
		owner: 'علی حبیبی',
		phone: '091313131313',
	},
	{
		id: 2,
		name: 'کوپ مرمر 2201 - اسلب های 2301 - 2401 ...',
		orderCode: 324567,
		amount: 3,
		status: 'ثبت شده',
		owner: 'علی حبیبی',
		phone: '091313131313',
	},
	{
		id: 3,
		name: 'کوپ مرمر 2201 - اسلب های 2301 - 2401 ...',
		orderCode: 324567,
		amount: 3,
		status: 'ثبت شده',
		owner: 'علی حبیبی',
		phone: '091313131313',
	},
	{
		id: 4,
		name: 'کوپ مرمر 2201 - اسلب های 2301 - 2401 ...',
		orderCode: 324567,
		amount: 3,
		status: 'ثبت شده',
		owner: 'علی حبیبی',
		phone: '091313131313',
	},
	{
		id: 5,
		name: 'کوپ مرمر 2201 - اسلب های 2301 - 2401 ...',
		orderCode: 324567,
		amount: 3,
		status: 'ثبت شده',
		owner: 'علی حبیبی',
		phone: '091313131313',
	},
];

const paymentListData: Payment[] = [
	{
		id: 1,
		description: 'به صورت نقد',
		date: '1403/08/01',
		price: '512.000.000',
		documents: true,
	},

	{
		id: 2,
		description: 'به صورت نقد',
		date: '1403/08/01',
		price: '512.000.000',
		documents: false,
	},

	{
		id: 3,
		description: 'به صورت نقد',
		date: '1403/08/01',
		price: '512.000.000',
		documents: null,
	},
];

const ordersColumns = createColumnHelper<Order>();
const paymentsColumns = createColumnHelper<Payment>();

function Order() {
	const [openOrderDetail, setOpenOrderDetail] = useState(0);

	const CustomerColumnsDef = useMemo(
		() => [
			ordersColumns.accessor('id', {
				header: 'ردیف',
				cell: (info) => <span>{info.getValue()}</span>,
			}),

			ordersColumns.accessor('name', {
				header: () => 'مشخصات',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			ordersColumns.accessor('orderCode', {
				header: () => <div className="">شماره سفارش</div>,
				cell: (info) => <span>{info.getValue()}</span>,
			}),
			ordersColumns.accessor('amount', {
				header: 'تعداد',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			ordersColumns.accessor('status', {
				header: 'وضعیت',
				cell: (info) => (
					<div className="flex items-center gap-2">
						<div className="size-3 rounded-full border border-primary bg-primary/35" />
						<span className="text-xs">{info.getValue()}</span>
					</div>
				),
			}),
			ordersColumns.accessor('phone', {
				header: () => <span>موبایل</span>,
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			ordersColumns.accessor('id', {
				id: 'actions',
				header: 'عملیات',
				cell: () => (
					<div className="">
						<Icon
							onClick={() => {
								setOpenOrderDetail(1);
							}}
							icon="gg:arrow-up-o"
							className="-rotate-45 cursor-pointer"
							width="24"
							height="24"
						/>
					</div>
				),
			}),
		],
		[],
	);

	const paymentColumnsDef = useMemo(
		() => [
			paymentsColumns.accessor('id', {
				header: 'ردیف',
				cell: (info) => <span>{info.getValue()}</span>,
			}),

			paymentsColumns.accessor('description', {
				header: () => 'توضیحات',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			paymentsColumns.accessor('date', {
				header: () => <div className="">تاریخ </div>,
				cell: (info) => <span>{info.getValue()}</span>,
			}),
			paymentsColumns.accessor('price', {
				header: 'مبلغ',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			paymentsColumns.accessor('documents', {
				header: 'مدارک',
				cell: (info) => (
					<div className="flex items-center justify-start gap-2">
						{info.getValue() && (
							<Icon
								icon="ic:round-check"
								width="24"
								height="24"
							/>
						)}
						{info.getValue() === false && (
							<Icon
								icon="ep:close"
								width="24"
								height="24"
								className="text-light-red"
							/>
						)}

						{info.getValue() === null && <div className="size-6" />}

						<button
							disabled={info.getValue() === true}
							className="flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-primary p-1.5 text-xs font-normal duration-200 hover:bg-primary hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-gray-400 disabled:hover:text-gray-200"
						>
							<Icon
								icon="jam:plus"
								width="24"
								height="24"
								className="size-4"
							/>
							<span>آپلود تصویر</span>
						</button>
					</div>
				),
			}),
		],
		[],
	);

	const [customersData, _setCustomersData] = React.useState(() => [
		...ordersListData,
	]);

	const [paymentsData, _setPaymentsData] = React.useState(() => [
		...paymentListData,
	]);

	return (
		<div className="h-[80vh] rounded-xl rounded-e-[24px] rounded-s-[32px] border-2 border-primary bg-black/35">
			<div className="">
				<Table data={customersData} columns={CustomerColumnsDef} />
			</div>
			<Dialog
				header={
					<div className="flex items-center justify-between">
						<div className="cursor-pointer">
							<img src={editIcon} alt="" className="size-5" />
						</div>
						<div className="flex items-center gap-2 text-base">
							<span>تایید قیمت</span>
							<div className="size-[14px] rounded-full border border-cerulina bg-cerulina/35" />
						</div>
						<div
							onClick={() => setOpenOrderDetail(0)}
							className="cursor-pointer"
						>
							<img src={backIcon} alt="" className="size-5" />
						</div>
					</div>
				}
				isOpen={openOrderDetail}
				setIsOpen={setOpenOrderDetail}
			>
				<div className="mb-4 rounded-[11px] border border-cherry-red bg-cherry-red/40 p-1.5 text-xs font-medium">
					به علت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
					چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
					روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
					فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
					ابزارهای کاربردی می باشد سفارش شما رد شده است.
				</div>
				<div className="rounded-2xl border border-white/20 p-4 pb-2">
					<div className="flex items-center justify-between">
						<div className="space-y-2">
							<div className="flex items-start gap-3">
								<div className="aspect-square w-[50px] overflow-hidden rounded-full">
									<img
										src={userIcon}
										alt=""
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="space-y-2">
									<p className="text-xl font-medium">
										علی حبیبی
									</p>
									<div className="flex items-center gap-2">
										<div className="size-[10px] rounded-full bg-dark-red" />
										<p className="text-xs font-normal leading-[18.35px]">
											واسطه
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<div>
									<img
										src={reagentIcon}
										alt=""
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<p className="text-xs font-normal leading-[18.35px]">
										علی حبیبی
									</p>
									<p className="text-xs font-normal leading-[18.35px]">
										091313131313 - 091313131313
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-end gap-4">
								<span>091313131313</span>
								<img
									src={phoneIcon}
									alt=""
									className="size-5"
								/>
							</div>
							<div className="flex items-center justify-end gap-4">
								<span>alihabib1212@gmail.com</span>
								<img src={mailIcon} alt="" className="size-5" />
							</div>
							<div className="flex items-center justify-end gap-4">
								<span>111111111111</span>
								<img
									src={idCardIcon}
									alt=""
									className="size-5"
								/>
							</div>
						</div>
					</div>
					<div className="mt-4 space-y-0.5 border-t border-t-gray-500 py-2">
						<p className="text-xs font-medium"> آدرس :</p>
						<p className="text-xs font-light">
							اصفهان - لورم ایپسوم متن ساختگی با تولید سادگی
							نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
							است
						</p>
						<p className="text-xs font-light">
							اصفهان - لورم ایپسوم متن ساختگی با تولید سادگی
							نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
							است
						</p>
					</div>
				</div>

				<div className="mt-4">
					<h1 className="px-2 text-base font-medium">
						سفارش شماره 51034
					</h1>

					<div className="mt-4 flex items-center justify-between gap-2 rounded-[14px]">
						<OrderStoneItem />
						<OrderStoneItem />
						<OrderStoneItem />
					</div>
					<div className="mt-2 flex items-center justify-between px-2">
						<p>مبلغ کل :</p>
						<p>1.000.000.000 تومان</p>
					</div>
				</div>

				<div className="mt-2 border-t border-t-gray-500 px-2 pt-2">
					<div className="flex items-center gap-4">
						<p className="text-base font-medium">نحوه پرداخت</p>
						<div className="ms-auto text-xs font-normal">
							تصویر طی نامه امضا شده
						</div>
						<button className="flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-primary p-1.5 text-xs font-normal duration-200 hover:bg-primary hover:text-white">
							<Icon
								icon="jam:plus"
								width="24"
								height="24"
								className="size-4"
							/>
							<span>آپلود تصویر</span>
						</button>
					</div>
				</div>

				<div className="mt-2 overflow-hidden rounded-3xl border border-gray-700">
					<TableSmall
						data={paymentsData}
						columns={paymentColumnsDef}
					/>
				</div>

				<div className="mt-4">
					<h1 className="px-2 text-base font-medium">
						شرایط و ضوابط
					</h1>

					<div className="mt-2 space-y-1 rounded-xl border border-gray-500 px-2 py-2">
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>هزینه حمل بار و ارسال بر عهده مشتری است.</p>
						</div>
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Icon
								icon="material-symbols-light:star-rate-rounded"
								width="24"
								height="24"
							/>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
							</p>
						</div>
					</div>
				</div>

				<div className="mt-4 text-center">
					<button className="rounded-xl border-2 border-primary px-4 py-2 text-lg font-normal duration-200 hover:bg-primary hover:text-white disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500 disabled:hover:text-gray-200">
						ارسال به حسابداری
					</button>
				</div>
			</Dialog>
		</div>
	);
}

export default Order;
