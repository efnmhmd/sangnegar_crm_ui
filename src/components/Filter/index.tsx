import queryString from 'query-string';
import { act, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import useCoopQuery from '@hooks/query/useCoopsQuery';
import useSlabQuery from '@hooks/query/useSlabQuery';
import { Icon } from '@iconify/react/dist/iconify.js';
import { StoneType } from '@/types/Stone.type';

function Filter({
	isOpen,
	active,
	setActive,
}: {
	isOpen: boolean;
	active: number;
	setActive: React.Dispatch<React.SetStateAction<number>>;
}) {
	const navigate = useNavigate();

	useEffect(() => {
		const queries = queryString.parse(location.search);

		if (Object.keys(queries).length === 0) {
			setActive(0);
			queries.show = 'coop';
			navigate({
				pathname: location.pathname,
				search: queryString.stringify(queries),
			});
		} else if (queries?.show && queries.show === 'coop') {
			setActive(0);
		} else if (queries?.show && queries.show === 'slab') {
			setActive(1);
		}
	}, []);

	const handleChangeFilter = (activeTab: number) => {
		const queries = queryString.parse(location.search);
		queries.show = activeTab === 1 ? 'slab' : 'coop';
		setActive((pre) => (pre === 0 ? 1 : 0));
		navigate({
			pathname: location.pathname,
			search: queryString.stringify(queries),
		});
	};

	return (
		<div
			className={twMerge(
				'overflow-hidden p-2 duration-200',
				isOpen
					? 'flex-1 opacity-100'
					: 'pointer-events-none flex-[0] opacity-0',
			)}
		>
			<div className="rounded-2xl border-[3px] border-primary bg-black/35 p-4">
				<TabGroup selectedIndex={active} onChange={handleChangeFilter}>
					<TabList className="flex items-center justify-between gap-2 rounded-xl bg-transparent p-2 shadow-inside">
						<Tab className="flex-1 rounded-lg p-2 outline-none duration-200 data-[selected]:bg-primary data-[selected]:text-white">
							کوپ
						</Tab>
						<Tab className="flex-1 rounded-lg p-2 outline-none duration-200 data-[selected]:bg-primary data-[selected]:text-white">
							اسلب
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel className="py-4">
							<div className="space-y-2">
								<h3>نوع</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										مرمریت
									</div>
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										گرانیت
									</div>
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										تراورتن
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>رنگ زمینه</h3>
								<div className="grid grid-cols-3 gap-2">
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-red-600 to-white"></div>
										<span className="block flex-1 text-start">
											قرمز
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-blue-600 to-white"></div>
										<span className="block flex-1 text-start">
											آبی
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-green-600 to-white"></div>
										<span className="block flex-1 text-start">
											سبز
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-yellow-600 to-white"></div>
										<span className="block flex-1 text-start">
											زرد
										</span>
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>نوع فرآوری</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										پالیش
									</div>
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										بوش همر
									</div>
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										ساب
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>ضخامت</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>200</span>
										<span>CM</span>
									</div>
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>300</span>
										<span>CM</span>
									</div>
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>400</span>
										<span>CM</span>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel className="py-4">
							<div className="space-y-2">
								<h3>نوع</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										مرمریت
									</div>
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										گرانیت
									</div>
									<div className="flex-1 cursor-pointer rounded-xl border border-white p-1 text-center duration-200 hover:bg-primary">
										تراورتن
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>رنگ زمینه</h3>
								<div className="grid grid-cols-3 gap-2">
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-red-600 to-white"></div>
										<span className="block flex-1 text-start">
											قرمز
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-blue-600 to-white"></div>
										<span className="block flex-1 text-start">
											آبی
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-green-600 to-white"></div>
										<span className="block flex-1 text-start">
											سبز
										</span>
									</div>
									<div
										className="flex flex-1 items-center justify-between gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div className="size-7 rounded-full bg-gradient-to-r from-yellow-600 to-white"></div>
										<span className="block flex-1 text-start">
											زرد
										</span>
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>نوع فرآوری</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										پالیش
									</div>
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										بوش همر
									</div>
									<div className="flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										ساب
									</div>
								</div>
							</div>

							<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

							<div className="space-y-2">
								<h3>ضخامت</h3>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>200</span>
										<span>CM</span>
									</div>
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>300</span>
										<span>CM</span>
									</div>
									<div className="flex-1 cursor-pointer space-x-1 rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary">
										<span>400</span>
										<span>CM</span>
									</div>
								</div>
							</div>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</div>
		</div>
	);
}

export default Filter;
