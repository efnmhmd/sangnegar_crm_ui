import React, { ReactNode, useMemo, useState } from 'react';
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import Dialog from '@components/Dialog';
import Table from '@components/Tabel';
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

type Person = {
	person: string;
	nationalCode: string;
	phone: string;
	reagent: string;
	type: string;
	orders: number;
	email: string;
};

const customersListData: Person[] = [
	{
		person: 'علیرضا داودی',
		phone: '09220781269',
		reagent: 'علیرضا داودی',
		type: 'واسطه',
		orders: 300,
		email: 'alibehvand@yahoo.com',
		nationalCode: '1271234567',
	},
	{
		person: 'علیرضا داودی',
		phone: '09220781269',
		reagent: 'علیرضا داودی',
		type: 'بساز بفروش',
		orders: 300,
		email: 'alibehvand@yahoo.com',
		nationalCode: '1271234567',
	},
	{
		person: 'علیرضا داودی',
		phone: '09220781269',
		reagent: 'علیرضا داودی',
		type: 'پیمانکار',
		orders: 300,
		email: 'alibehvand@yahoo.com',
		nationalCode: '1271234567',
	},
	{
		person: 'علیرضا داودی',
		phone: '09220781269',
		reagent: 'علیرضا داودی',
		type: 'مصرف کننده',
		orders: 300,
		email: 'alibehvand@yahoo.com',
		nationalCode: '1271234567',
	},
];

const customersColumns = createColumnHelper<Person>();

type Order = {
	id: number;
	name: string;
	amount: number;
	date: string;
	status: string;
};

const customersOrderColumns = createColumnHelper<Order>();

const customersOrderListData: Order[] = [
	{
		id: 1,
		name: 'اسلب از کوپ با کد Ls.001',
		amount: 2,
		date: '1403/01/01',
		status: 'تایید شده',
	},
	{
		id: 2,
		name: 'اسلب از کوپ با کد Ls.001',
		amount: 2,
		date: '1403/01/01',
		status: 'تایید شده',
	},
	{
		id: 3,
		name: 'اسلب از کوپ با کد Ls.001',
		amount: 2,
		date: '1403/01/01',
		status: 'تایید شده',
	},
	{
		id: 4,
		name: 'اسلب از کوپ با کد Ls.001',
		amount: 2,
		date: '1403/01/01',
		status: 'تایید شده',
	},
	{
		id: 5,
		name: 'اسلب از کوپ با کد Ls.001',
		amount: 2,
		date: '1403/01/01',
		status: 'تایید شده',
	},
];

const CUstomerOrderColumnsDef = [
	customersOrderColumns.accessor('id', {
		header: 'ردیف',
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	customersOrderColumns.accessor('name', {
		header: () => <span>مشخصات محصول</span>,
		cell: (info) => <div className="text-sm">{info.getValue()}</div>,
	}),
	customersOrderColumns.accessor('amount', {
		header: () => 'تعداد',
		cell: (info) => <div className="text-sm">{info.getValue()}</div>,
	}),
	customersOrderColumns.accessor('date', {
		header: () => <div className="">تاریخ سفارش</div>,
		cell: (info) => (
			<div className="w-[95px] rounded-md py-2 text-center text-sm font-medium">
				{info.getValue()}
			</div>
		),
	}),
	customersOrderColumns.accessor('status', {
		header: 'وضعیت',
		cell: (info) => (
			<div className="flex items-center gap-2">
				<div className="size-2 rounded-full border border-primary bg-primary/45" />
				<span className="text-nowrap text-xs">{info.getValue()}</span>
			</div>
		),
	}),
	customersOrderColumns.accessor('id', {
		id: 'actions',
		header: 'عملیات',
		cell: () => (
			<div className="flex cursor-pointer items-center justify-center">
				<img src={receiptIcon} alt="" className="size-5" />
			</div>
		),
	}),
];

function Customer() {
	const [openCustomerDetail, setOpenCustomerDetail] = useState(false);

	const CUstomerColumnsDef = useMemo(
		() => [
			customersColumns.accessor('person', {
				header: 'شخص',
				cell: (info) => (
					<div className="flex items-center gap-2">
						<div className="size-8 overflow-hidden rounded-full">
							<img
								src={avatarImage}
								className="h-full w-full object-cover"
								alt=""
							/>
						</div>
						<div className="flex flex-col">
							<span>{info.getValue()}</span>
							<span className="text-xs text-gray-400">
								{info.row.original.nationalCode}
							</span>
						</div>
					</div>
				),
			}),
			customersColumns.accessor('phone', {
				header: () => <span>موبایل</span>,
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			customersColumns.accessor('reagent', {
				header: () => 'معرف',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			customersColumns.accessor('type', {
				header: () => <div className="">نوع مشتری</div>,
				cell: (info) => (
					<div className="w-[95px] rounded-md py-2 text-center text-base font-medium">
						{info.getValue()}
					</div>
				),
			}),
			customersColumns.accessor('orders', {
				header: 'سفارشات',
				cell: (info) => <div className="">{info.getValue()}</div>,
			}),
			customersColumns.accessor('email', {
				header: 'ایمیل',
				cell: (info) => (
					<div className="flex items-center gap-8">
						{info.getValue()}
						<Icon
							onClick={() => {
								setOpenCustomerDetail(true);
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

	const [customersData, _setCustomersData] = React.useState(() => [
		...customersListData,
	]);
	const [customersOrderData, _setCustomersOrderData] = React.useState(() => [
		...customersOrderListData,
	]);

	return (
		<div className="h-[80vh] rounded-xl rounded-e-[24px] rounded-s-[32px] border-2 border-primary bg-black/35">
			<div className="">
				<Table data={customersData} columns={CUstomerColumnsDef} />
			</div>
			<Dialog
				header={
					<div className="flex items-center justify-between">
						<div className="cursor-pointer">
							<img src={editIcon} alt="" className="size-5" />
						</div>
						<div
							onClick={() => setOpenCustomerDetail(false)}
							className="cursor-pointer"
						>
							<img src={backIcon} alt="" className="size-5" />
						</div>
					</div>
				}
				isOpen={openCustomerDetail}
				setIsOpen={setOpenCustomerDetail}
			>
				<div className="flex items-center justify-between rounded-2xl border border-white/20 p-4">
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
									علیرضا داودی
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
									علیرضا داودی
								</p>
								<p className="text-xs font-normal leading-[18.35px]">
									09220781269 - 09220781269
								</p>
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-end gap-4">
							<span>09220781269</span>
							<img src={phoneIcon} alt="" className="size-5" />
						</div>
						<div className="flex items-center justify-end gap-4">
							<span>alirezadavuodi@outlook.com</span>
							<img src={mailIcon} alt="" className="size-5" />
						</div>
						<div className="flex items-center justify-end gap-4">
							<span>1271234567</span>
							<img src={idCardIcon} alt="" className="size-5" />
						</div>
					</div>
				</div>

				<div className="mt-4">
					<h1 className="text-sm font-medium">
						سفارشات بر اساس نوع سنگ
					</h1>
					<div className="flex items-center justify-between gap-2 rounded-[14px] bg-black/30 p-4">
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`مرمر`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`تراونیکس`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`لایم ستون`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`تراورتن`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`گرانیت`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`مرمریت`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`چینی`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
						<div className="aspect-square w-[62px]">
							<CircularProgressbar
								value={20}
								text={`کوارتز`}
								styles={buildStyles({
									textColor: 'white',
									pathColor: '#FF9F63',
								})}
							/>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<div className="flex items-center justify-between">
						<div className="relative flex aspect-square w-[126px] flex-col items-center gap-2 after:absolute after:-left-5 after:top-2 after:h-3/4 after:w-[1px] after:translate-x-1/2 after:bg-gray-50">
							<CircularProgressbarWithChildren
								value={100}
								styles={buildStyles({
									pathColor: '#de44a5',
								})}
							>
								<p>14</p>
								<span>سال</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">همراهی</p>
						</div>

						<div className="flex aspect-square w-[126px] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={70}
								styles={buildStyles({
									pathColor: '#3882b7',
								})}
							>
								<p>2.5</p>
								<span>میلیارد تومان</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">
								مبلغ کل سفارشات
							</p>
						</div>

						<div className="flex aspect-square w-[126px] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={32}
								styles={buildStyles({
									pathColor: '#b7a438',
								})}
							>
								<p>1534</p>
								<span>متر مربع</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">
								متراژ فروخته شده
							</p>
						</div>

						<div className="flex aspect-square w-[126px] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={66}
								styles={buildStyles({
									pathColor: '#A92222',
								})}
							>
								<p>4.3</p>
								<span>امتیاز</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">
								امتیاز بازاریاب
							</p>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<Table
						data={customersOrderData}
						columns={CUstomerOrderColumnsDef}
					/>
				</div>
			</Dialog>
		</div>
	);
}

export default Customer;
