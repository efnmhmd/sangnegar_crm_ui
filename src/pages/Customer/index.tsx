import { useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Dialog from '@components/Dialog';
import Table from '@components/Tabel';
import { CUSTOMER_TYPE } from '@constant/State';
import useCustomerQuery from '@hooks/query/useCustomerQuery';
import { Icon } from '@iconify/react/dist/iconify.js';
import { createColumnHelper } from '@tanstack/react-table';
import { CustomerType } from '@/types/Customer.type';
import SingleCustomer from './components/SingleCustomer';
import avatarImage from '@assets/images/avatar.svg';
import backIcon from '@assets/images/back.svg';
import editIcon from '@assets/images/edit.svg';

const customersColumns = createColumnHelper<CustomerType>();

function Customer() {
	const [openCustomerDetail, setOpenCustomerDetail] = useState<number>(0);

	const customerQuery = useCustomerQuery();

	const isLoadingCustomers = customerQuery.isLoading;

	const CUstomerColumnsDef = useMemo(
		() => [
			customersColumns.display({
				id: 'name',
				header: () => <div>شخص</div>,
				cell: (info) =>
					isLoadingCustomers ? (
						<div className="flex max-w-[8rem] items-center gap-2">
							<div className="size-12 shrink-0 overflow-hidden rounded-full">
								<Skeleton circle className="h-full w-full" />
							</div>
							<Skeleton
								containerClassName="flex-1 h-full"
								className="h-3 w-10"
								count={2}
							/>
						</div>
					) : (
						<div className="flex max-w-[8rem] items-center gap-2">
							<div className="size-8 shrink-0 overflow-hidden rounded-full">
								<img
									src={info.row.original.avatar}
									onError={({ currentTarget }) => {
										currentTarget.src = avatarImage;
									}}
									className="h-full w-full object-cover"
									alt=""
								/>
							</div>
							<div className="flex flex-col">
								{isLoadingCustomers ? (
									<Skeleton />
								) : (
									<span className="text-nowrap">
										{info.row.original.first_name}{' '}
										{info.row.original.last_name}
									</span>
								)}
								{isLoadingCustomers ? (
									<Skeleton />
								) : (
									<span className="text-xs text-gray-400">
										{info.row.original.national_id}
									</span>
								)}
							</div>
						</div>
					),
			}),
			customersColumns.accessor('mobile_numbers', {
				header: () => <span>موبایل</span>,
				cell: (info) => (
					<div className="max-w-[4rem] shrink-0">
						{isLoadingCustomers ? (
							<Skeleton className="w-full" />
						) : (
							info.row.original?.mobile_numbers?.phone
						)}
					</div>
				),
			}),
			customersColumns.accessor('introducer', {
				header: () => <div className="max-w-[6rem]">معرف</div>,
				cell: (info) => (
					<div className="w-[4.5rem] max-w-[6rem] shrink-0 overflow-hidden">
						{isLoadingCustomers ? (
							<Skeleton className="w-full" />
						) : (
							info.row.original.introducer
						)}
					</div>
				),
			}),
			customersColumns.accessor('customer_type', {
				header: () => <div className="max-w-[6rem]">نوع مشتری</div>,
				cell: (info) => (
					<div className="w-[4.5rem] max-w-[6rem] rounded-md py-2 text-center text-base font-medium">
						{isLoadingCustomers ? (
							<Skeleton />
						) : (
							CUSTOMER_TYPE[info.getValue()]
						)}
					</div>
				),
			}),
			customersColumns.accessor('orders_count', {
				header: () => (
					<div className="w-[4.5rem] max-w-[6rem]">سفارشات</div>
				),
				cell: (info) => (
					<div className="w-[4.5rem] max-w-[6rem] rounded-md py-2 text-base font-medium">
						{isLoadingCustomers ? <Skeleton /> : info.getValue()}
					</div>
				),
			}),
			customersColumns.accessor('email', {
				header: 'ایمیل',
				cell: (info) =>
					isLoadingCustomers ? (
						<Skeleton />
					) : (
						<div className="flex items-center gap-8">
							{info.getValue()}
							<Icon
								onClick={() => {
									setOpenCustomerDetail(info.row.original.id);
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
		[isLoadingCustomers],
	);

	const customerData = useMemo(
		() =>
			isLoadingCustomers
				? Array.from({ length: 3 })
				: customerQuery.data?.data,
		[isLoadingCustomers],
	);

	return (
		<div className="h-[80vh] rounded-xl rounded-e-[24px] rounded-s-[32px] border-2 border-primary bg-black/35">
			<div className="">
				<Table data={customerData} columns={CUstomerColumnsDef} />
			</div>
			<Dialog
				header={
					<div className="flex items-center justify-between">
						<div className="cursor-pointer">
							<img src={editIcon} alt="" className="size-5" />
						</div>
						<div
							onClick={() => setOpenCustomerDetail(0)}
							className="cursor-pointer"
						>
							<img src={backIcon} alt="" className="size-5" />
						</div>
					</div>
				}
				isOpen={Boolean(openCustomerDetail)}
				setIsOpen={setOpenCustomerDetail}
			>
				<SingleCustomer id={openCustomerDetail} />
			</Dialog>
		</div>
	);
}

export default Customer;
