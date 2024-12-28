import { Icon } from '@iconify/react/dist/iconify.js';
import userImage from '@assets/images/user.svg';

function Header() {
	return (
		<div className="flex h-24 items-center justify-between py-4">
			<div className="flex flex-1 items-center gap-4">
				<div className="flex size-11 items-center justify-center rounded-[17px] border-2 border-primary">
					<img src={userImage} alt="user" />
				</div>
				<div className="flex size-11 items-center justify-center rounded-[17px] border-2 border-primary">
					<Icon icon="system-uicons:home-alt" className="size-6" />
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center gap-10">
				<div className="flex items-center gap-2">
					<Icon icon="hugeicons:contact" className="size-8" />
					<span>مشتریان</span>
				</div>
				<div className="flex items-center gap-2">
					<Icon icon="hugeicons:note-05" className="size-8" />
					<span>سفارشات</span>
				</div>
			</div>
			<div className="flex-[4]">
				<div className="mx-auto flex min-w-max max-w-[70%] items-center gap-4 rounded-3xl bg-black/30 p-4">
					<Icon
						icon="iconamoon:search-thin"
						className="size-8 cursor-pointer"
					/>
					<input
						placeholder="جستجو"
						type="text"
						className="flex-1 border-none bg-transparent outline-none"
					/>
					<Icon
						icon="ant-design:scan-outlined"
						className="ms-auto size-8 cursor-pointer"
					/>
				</div>
			</div>
			<div className="flex flex-[2] items-center justify-end gap-4">
				<div className="group relative flex size-14 cursor-pointer items-center justify-center rounded-[17px] bg-black/30">
					<Icon
						icon="clarity:notification-line"
						className="pointer-events-none size-9"
					/>
					<div className="absolute -left-1 -top-1 size-4 rounded-full bg-red-600" />
				</div>

				<div className="flex size-14 items-center justify-center rounded-[17px] bg-black/30">
					<Icon
						icon="iconamoon:shopping-bag-thin"
						className="size-10"
					/>
				</div>

				<div className="flex size-14 items-center justify-center rounded-[17px] bg-black/30">
					<Icon icon="quill:off" className="size-9" />
				</div>
			</div>
		</div>
	);
}

export default Header;
