import { Fragment } from 'react/jsx-runtime';
import Header from '@components/Header';
import StoneCard from '@components/StoneCard';
import { Icon } from '@iconify/react/dist/iconify.js';
import { STONE_CARDS_DATA } from './DUMMY_STONE_DATA';

export default function Home() {
	return (
		<Fragment>
			<Header />

			{/* filters */}
			<div className="my-8 grid grid-cols-5 gap-2">
				<div className="col-span-1 flex items-center justify-between px-2">
					<button className="flex items-center justify-center gap-4 rounded-2xl bg-black/45 p-4 px-8 duration-200 hover:bg-primary">
						<Icon icon="rivet-icons:filter" className="size-6" />
						<span>فیلتر</span>
					</button>
					<button className="rounded-2xl bg-black/45 p-4 duration-200 hover:bg-primary">
						<Icon icon="hugeicons:menu-square" className="size-6" />
					</button>
					<button className="rounded-2xl bg-black/45 p-4 duration-200 hover:bg-primary">
						<Icon
							icon="mingcute:list-check-3-line"
							className="size-6"
						/>
					</button>
				</div>
				<div className="col-span-4 flex items-center justify-between rounded-2xl bg-black/45 p-2">
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
			</div>

			{/* cards */}
			<div className="grid grid-cols-5 gap-2">
				{/* card */}
				{STONE_CARDS_DATA.map((card, i) => (
					<StoneCard card={card} key={i} />
				))}
			</div>
		</Fragment>
	);
}
