import queryString from 'query-string';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

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

	const typeFilter = useMemo(
		() => [
			{ label: 'مرمریت', value: '#' },
			{ label: 'گرانیک', value: '#' },
			{ label: 'تراورتن', value: '#' },
		],
		[],
	);

	const madeTypeFilter = useMemo(
		() => [
			{ label: 'پالیش', value: '#' },
			{ label: 'بوش‌همر', value: '#' },
			{ label: 'ساب', value: '#' },
		],
		[],
	);
	const ThickFilter = useMemo(
		() => [
			{ label: '5cm', value: '#' },
			{ label: '5cm', value: '#' },
			{ label: '5cm', value: '#' },
		],
		[],
	);

	const colorFilter = useMemo(
		() => [
			{
				label: 'قرمز',
				color: 'bg-red-gradient',
			},
			{
				label: 'آبی',
				color: 'bg-blue-gradient',
			},
			{
				label: 'سبز',
				color: 'bg-green-gradient',
			},
			{
				label: 'زرد',
				color: 'bg-orange-gradient',
			},
		],
		[],
	);

	return (
		<div
			className={twMerge(
				'overflow-hidden duration-200',
				isOpen
					? 'flex-1 p-2 opacity-100'
					: 'pointer-events-none flex-[0] opacity-0',
			)}
		>
			<div className="rounded-2xl border bg-black/35 p-1.5">
				<TabGroup selectedIndex={active} onChange={handleChangeFilter}>
					<TabList className="flex items-center justify-between gap-2 rounded-xl bg-transparent p-2 shadow-inside">
						<Tab className="flex-1 rounded-lg p-1 text-sm font-semibold outline-none duration-200 data-[selected]:bg-primary data-[selected]:text-white">
							کوپ
						</Tab>
						<Tab className="flex-1 rounded-lg p-1 text-sm font-semibold outline-none duration-200 data-[selected]:bg-primary data-[selected]:text-white">
							اسلب
						</Tab>
					</TabList>
					<TabPanels>
						<div className="space-y-2">
							<h3>نوع</h3>
							<div className="flex flex-wrap items-center justify-between gap-2">
								{typeFilter.map((type, index) => (
									<div
										key={index}
										className="flex-1 cursor-pointer text-nowrap rounded-[1.062rem] border border-white/85 p-1 text-center text-lg font-normal duration-200 hover:bg-primary"
									>
										{type.label}
									</div>
								))}
							</div>
						</div>

						<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

						{/* <div className="space-y-2">
							<h3>رنگ زمینه</h3>
							<div className="flex flex-col flex-wrap items-center gap-2 md:flex-row">
								{colorFilter.map((color, index) => (
									<div
										key={index}
										className="flex w-full flex-1 cursor-pointer items-center gap-2 border border-white p-0.5"
										style={{
											borderRadius:
												'100px 300px 300px 100px',
										}}
									>
										<div
											className={twMerge(
												'size-7 shrink-0 rounded-full to-white',
												color.color,
											)}
										/>

										<span className="block text-sm font-semibold text-center">
											{color.label}
										</span>
									</div>
								))}
							</div>
						</div> */}

						<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

						<div className="space-y-2">
							<h3>نوع فرآوری</h3>
							<div className="flex flex-col flex-wrap items-center justify-between gap-2 md:flex-row">
								{madeTypeFilter.map((made, index) => (
									<div
										key={index}
										className="w-full flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary"
									>
										{made.label}
									</div>
								))}
							</div>
						</div>

						<div className="mx-auto mb-5 mt-10 h-0.5 w-1/2 rounded-full bg-gray-500" />

						<div className="space-y-2">
							<h3>ضخامت</h3>
							<div className="flex flex-col flex-wrap items-center justify-between gap-2 md:flex-row">
								{ThickFilter.map((made, index) => (
									<div
										key={index}
										className="w-full flex-1 cursor-pointer rounded-lg border border-white p-1 text-center duration-200 hover:bg-primary"
									>
										{made.label}
									</div>
								))}
							</div>
						</div>
					</TabPanels>
				</TabGroup>
			</div>
		</div>
	);
}

export default Filter;
