import { Fragment, useMemo } from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import Skeleton from 'react-loading-skeleton';
import Table from '@components/Tabel';
import { CUSTOMER_TYPE, ORDER_TYPE } from '@constant/State';
import useSingleCustomerQuery from '@hooks/query/useSingleCustomerQuery';
import { createColumnHelper } from '@tanstack/react-table';
import { OrderType } from '@/types/Customer.type';
import idCardIcon from '@assets/images/idCard.svg';
import mailIcon from '@assets/images/mail.svg';
import phoneIcon from '@assets/images/phone.svg';
import reagentIcon from '@assets/images/reagent.svg';
import receiptIcon from '@assets/images/receipt.svg';

const customersOrderColumns = createColumnHelper<OrderType>();

function SingleCustomer({ id }: { id: number }) {
	const singleCustomerQuery = useSingleCustomerQuery(id);

	const isLoading = singleCustomerQuery.isLoading;

	const CUstomerOrderColumnsDef = useMemo(
		() => [
			customersOrderColumns.accessor('description', {
				header: () => <span>مشخصات محصول</span>,
				cell: (info) => (
					<div className="max-w-[6rem] text-nowrap text-sm">
						{isLoading ? <Skeleton /> : info.getValue()}
					</div>
				),
			}),
			customersOrderColumns.accessor('order_item_length', {
				header: () => 'تعداد',
				cell: (info) => (
					<div className="max-w-[4rem] text-sm">
						{isLoading ? <Skeleton /> : info.getValue()}
					</div>
				),
			}),
			customersOrderColumns.accessor('created', {
				header: () => <div className="">تاریخ سفارش</div>,
				cell: (info) => (
					<div className="max-w-[4rem] rounded-md py-2 text-center text-sm font-medium">
						{isLoading ? (
							<Skeleton />
						) : (
							<span>
								{new Date(
									info.row.original.created,
								).toLocaleDateString('fa-IR')}
							</span>
						)}
					</div>
				),
			}),
			customersOrderColumns.accessor('status', {
				header: 'وضعیت',
				cell: (info) => (
					<div className="flex max-w-[4rem] items-center gap-2">
						{isLoading ? (
							<Skeleton
								className="h-2 w-2"
								containerClassName="w-10"
							/>
						) : (
							<>
								<div className="size-2 shrink-0 rounded-full border border-primary bg-primary/45" />
								<span className="text-nowrap text-xs">
									{ORDER_TYPE[info.getValue()]}
								</span>
							</>
						)}
					</div>
				),
			}),
			customersOrderColumns.display({
				id: 'actions',
				header: 'عملیات',
				cell: () => (
					<div className="flex cursor-pointer items-center justify-center">
						{isLoading ? (
							<Skeleton
								className="flex-1"
								containerClassName="flex-1"
							/>
						) : (
							<img src={receiptIcon} alt="" className="size-5" />
						)}
					</div>
				),
			}),
		],
		[isLoading],
	);

	const customerData = useMemo(
		() =>
			isLoading
				? Array.from({ length: 3 })
				: singleCustomerQuery.data?.data?.customer_orders,
		[isLoading],
	);

	return (
		<Fragment>
			<div className="flex items-center justify-between rounded-2xl border border-white/20 p-4">
				<div className="space-y-2">
					<div className="flex items-start gap-3">
						<div className="aspect-square w-[50px] overflow-hidden rounded-full">
							{isLoading ? (
								<Skeleton circle className="h-full w-full" />
							) : (
								<img
									src={singleCustomerQuery.data?.data.avatar}
									alt=""
									className="h-full w-full object-cover"
								/>
							)}
						</div>
						{isLoading ? (
							<Skeleton
								count={2}
								className="w-full"
								containerClassName="w-16"
							/>
						) : (
							<div className="space-y-2">
								<p className="text-xl font-medium">
									{singleCustomerQuery.data?.data.first_name}{' '}
									{singleCustomerQuery.data?.data.last_name}
								</p>
								<div className="flex items-center gap-2">
									<div className="size-[10px] rounded-full bg-dark-red" />

									<p className="text-xs font-normal leading-[18.35px]">
										{
											CUSTOMER_TYPE[
												singleCustomerQuery.data?.data
													.customer_type as string
											]
										}
									</p>
								</div>
							</div>
						)}
					</div>
					<div className="flex items-center gap-2">
						<div>
							<img
								src={reagentIcon}
								alt=""
								className="h-full w-full object-cover"
							/>
						</div>
						{isLoading ? (
							<Skeleton
								count={2}
								className="h-2 w-full"
								containerClassName="w-24"
							/>
						) : (
							<div>
								<p className="text-xs font-normal leading-[18.35px]">
									{singleCustomerQuery.data?.data.first_name}{' '}
									{singleCustomerQuery.data?.data.last_name}
								</p>
								<p className="text-xs font-normal leading-[18.35px]">
									{
										singleCustomerQuery.data?.data
											.mobile_numbers.phone
									}{' '}
									-{' '}
									{
										singleCustomerQuery.data?.data
											.mobile_numbers.phone
									}
								</p>
							</div>
						)}
					</div>
				</div>

				{isLoading ? (
					<Skeleton
						count={3}
						className="h-2 w-full"
						containerClassName="w-24"
					/>
				) : (
					<div className="space-y-2">
						<div className="flex items-center justify-end gap-4">
							<span>
								{
									singleCustomerQuery.data?.data
										.mobile_numbers.phone
								}
							</span>
							<img src={phoneIcon} alt="" className="size-5" />
						</div>
						<div className="flex items-center justify-end gap-4">
							<span>alihabib1212@gmail.com</span>
							<img src={mailIcon} alt="" className="size-5" />
						</div>
						<div className="flex items-center justify-end gap-4">
							<span>
								{singleCustomerQuery.data?.data.national_id}
							</span>
							<img src={idCardIcon} alt="" className="size-5" />
						</div>
					</div>
				)}
			</div>

			<div className="mt-4">
				<h1 className="text-sm font-medium">سفارشات بر اساس نوع سنگ</h1>
			</div>

			{isLoading ? (
				<div className="flex items-center justify-around">
					<Skeleton
						circle
						className="aspect-square size-[7.875rem]"
					/>
					<Skeleton
						circle
						className="aspect-square size-[7.875rem]"
					/>
					<Skeleton
						circle
						className="aspect-square size-[7.875rem]"
					/>
				</div>
			) : (
				<div className="mt-4">
					<div className="flex items-center justify-around">
						<div className="relative flex aspect-square w-[7.875rem] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={100}
								styles={buildStyles({
									pathColor: '#de44a5',
								})}
							>
								<p>
									{
										singleCustomerQuery.data?.data
											.register_elapsed
									}
								</p>
								<span>سال</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">همراهی</p>
						</div>

						<div className="flex aspect-square w-[7.875rem] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={70}
								styles={buildStyles({
									pathColor: '#3882b7',
								})}
							>
								<p>
									{
										singleCustomerQuery.data?.data
											.soldout_value
									}
								</p>
								<span>میلیارد تومان</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">
								مبلغ کل سفارشات
							</p>
						</div>

						<div className="flex aspect-square w-[7.875rem] flex-col items-center gap-2">
							<CircularProgressbarWithChildren
								value={32}
								styles={buildStyles({
									pathColor: '#b7a438',
								})}
							>
								<p>
									{
										singleCustomerQuery.data?.data
											.soldout_meter
									}
								</p>
								<span>متر مربع</span>
							</CircularProgressbarWithChildren>
							<p className="text-xs font-medium">
								متراژ فروخته شده
							</p>
						</div>
					</div>
				</div>
			)}

			<div className="mt-4 border-primary">
				<Table data={customerData} columns={CUstomerOrderColumnsDef} />
			</div>
		</Fragment>
	);
}

export default SingleCustomer;
