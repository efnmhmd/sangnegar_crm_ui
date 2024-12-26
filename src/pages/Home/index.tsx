import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import Header from '@components/Header';
import GridStoneCard from '@components/StoneCard/GridStoneCard';
import LineStoneCard from '@components/StoneCard/LineStoneCard';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { STONE_CARDS_DATA } from './DUMMY_STONE_DATA';

export default function Home() {
	const [showFilterSection, setShowFilterSection] = useState<boolean>(true);

	const [gridList, setGridList] = useState<boolean>(true);

	return (
		<div className="flex items-start justify-between gap-2">
			<div
				className={twMerge(
					'overflow-hidden p-2 duration-200',
					showFilterSection
						? 'flex-1 opacity-100'
						: 'pointer-events-none flex-[0] opacity-0',
				)}
			>
				<div className="rounded-2xl border-[3px] border-primary bg-black/35 p-4">
					<TabGroup defaultIndex={0}>
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

			{/* cards */}
			<div
				className={twMerge(
					'grid flex-[4] gap-2',
					showFilterSection ? 'grid-cols-4' : 'grid-cols-5',
				)}
			>
				{/* filters */}
				<div className="col-span-1 flex items-center justify-between px-2">
					<button
						onClick={() => setShowFilterSection((pre) => !pre)}
						className="flex items-center justify-center gap-4 rounded-2xl bg-black/45 p-4 px-8 duration-200 hover:bg-primary"
					>
						<Icon icon="rivet-icons:filter" className="size-6" />
						<span>فیلتر</span>
					</button>
					<button
						onClick={() => setGridList(true)}
						className={twMerge(
							'rounded-2xl bg-black/45 p-4 duration-200 hover:bg-primary',
							gridList ? 'bg-primary' : 'bg-black/45',
						)}
					>
						<Icon icon="hugeicons:menu-square" className="size-6" />
					</button>
					<button
						onClick={() => setGridList(false)}
						className={twMerge(
							'rounded-2xl p-4 duration-200 hover:bg-primary',
							gridList ? 'bg-black/45' : 'bg-primary',
						)}
					>
						<Icon
							icon="mingcute:list-check-3-line"
							className="size-6"
						/>
					</button>
				</div>
				<div
					className={twMerge(
						'flex items-center justify-between rounded-2xl bg-black/45 p-2',
						showFilterSection ? 'col-span-3' : 'col-span-4',
					)}
				>
					<div className="flex items-center gap-3">
						<button className="flex items-center gap-2 rounded-lg p-2 hover:bg-white/20">
							<Icon icon="ph:sort-ascending" className="size-6" />
							<span>براساس</span>
						</button>
						<button className="rounded-lg p-2 hover:bg-white/20">
							جدیدترین ها
						</button>
						<button className="rounded-lg p-2 hover:bg-white/20">
							ویژه
						</button>
					</div>
					<div className="flex items-center gap-3">
						<div className="space-x-1 space-x-reverse">
							<span>تعداد اسلب</span>
							<span>:</span>
							<span>
								{new Number(29).toLocaleString('fa-ir')}
							</span>
						</div>
						<div className="space-x-1 space-x-reverse">
							<span>تعداد کوب</span>
							<span>:</span>
							<span>
								{new Number(155).toLocaleString('fa-ir')}
							</span>
						</div>
					</div>
				</div>
				{/* card */}
				{STONE_CARDS_DATA.map((card, i) =>
					gridList ? (
						<GridStoneCard card={card} key={i} />
					) : (
						<LineStoneCard card={card} key={i} />
					),
				)}
			</div>
		</div>
	);
}
