import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import { Icon } from '@iconify/react/dist/iconify.js';
import useAuthStore from '@store/useAuthStore';
import CartImage from '@assets/images/cart.svg?react';
import CustomerImage from '@assets/images/customers.svg?react';
import HomeImage from '@assets/images/home.svg?react';
import OffImage from '@assets/images/off.svg?react';
import OrderImage from '@assets/images/orders.svg?react';
import RingImage from '@assets/images/ring.svg?react';
import ScanImage from '@assets/images/scan.svg?react';
import SearchImage from '@assets/images/search.svg?react';
import UserImage from '@assets/images/user.svg?react';

function Header() {
	const { tokenExpired } = useAuthStore();
	const navigate = useNavigate();

	return (
		<div className="flex h-24 items-center justify-between px-4 py-4">
			<div className="flex flex-1 items-center gap-2">
				<Button
					size="sm"
					onClick={() => navigate('/profile')}
					withBorder
					className="overflow-hidden"
				>
					<UserImage className="size-6" />
				</Button>
				<Button size="sm" onClick={() => navigate('/sore')} withBorder>
					<HomeImage className="size-5" />
				</Button>
			</div>
			<div className="flex flex-1 items-center justify-center gap-4">
				<Button onClick={() => navigate('/customers')} size="auto">
					<div className="flex items-center gap-1">
						<CustomerImage className="size-5" />
						<span className="text-sm">مشتریان</span>
					</div>
				</Button>
				<Button size="auto" onClick={() => navigate('/orders')}>
					<div className="flex items-center gap-1">
						<OrderImage className="size-5" />
						<span className="text-sm">سفارشات</span>
					</div>
				</Button>
			</div>

			<div className="flex-[4]">
				<button className="mx-auto flex min-w-max max-w-[70%] items-center gap-4 rounded-3xl bg-black/30 p-3">
					<SearchImage className="size-5 text-white/80" />
					<input
						placeholder="جستجو"
						type="text"
						className="flex-1 border-none bg-transparent text-base font-normal outline-none"
					/>
					<ScanImage className="size-5 text-white/80" />
				</button>
			</div>

			<div className="flex flex-[2] items-center justify-end gap-2">
				<Button size="md" className="relative bg-black/30">
					<RingImage className="size-5" />
					<div className="absolute -left-1 -top-1 size-3 rounded-full bg-red-600" />
				</Button>

				<Button
					size="md"
					onClick={() => navigate('/cart')}
					className="bg-black/30"
				>
					<CartImage className="size-5" />
				</Button>

				<Button
					size="md"
					onClick={tokenExpired}
					className="bg-black/30"
				>
					<OffImage className="size-5" />
				</Button>
			</div>
		</div>
	);
}

export default Header;
