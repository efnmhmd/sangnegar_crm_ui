import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Container from '@components/Container';
import LanguageItem from '@components/LnaguageItem';
import { Icon } from '@iconify/react';
import layoutImage from '@assets/images/auth-layout-img.svg';
import headphoneIcon from '@assets/images/headphone.svg';
import sliderImage from '@assets/images/slider.svg';

const LANGUAGES = [
	{
		label: 'فارسی',
		icon: <Icon icon="emojione:flag-for-iran" className="size-10" />,
	},
	{
		label: 'English',
		icon: <Icon icon="circle-flags:uk" className="size-10" />,
	},
	{
		label: 'العربیه',
		icon: (
			<Icon icon="emojione:flag-for-saudi-arabia" className="size-10" />
		),
	},
	{
		label: 'Türkçe',
		icon: <Icon icon="emojione:flag-for-turkey" className="size-10" />,
	},
];

export default function AuthLayout() {
	const [showSettings, setShowSettings] = useState(false);

	return (
		<main
			dir="rtl"
			className="primary-bg flex h-screen items-center justify-center font-vazir text-white"
		>
			<Container>
				<div
					className="relative mx-auto h-[800px] w-[1100px] bg-contain bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${layoutImage})` }}
				>
					<div
						className={twMerge(
							'setting-overlay absolute inset-0 rounded-3xl bg-black/60 duration-200',
							showSettings
								? 'z-10 opacity-100 backdrop-blur-sm'
								: 'pointer-events-none z-0 opacity-0 backdrop-blur-0',
						)}
						onClick={(
							e: React.MouseEvent<HTMLElement, MouseEvent>,
						) => {
							const target = e.target as HTMLDivElement;

							if (target.classList.contains('setting-overlay')) {
								setShowSettings(false);
							}
						}}
					>
						<div className="z-10 h-full w-2/5 rounded-3xl border-4 border-primary bg-black/70 px-4 py-8">
							<div className="flex items-center">
								<Icon
									icon="carbon:earth-southeast-asia"
									className="size-10"
								/>
								<span className="mx-2">انتخاب زبان</span>
								<Icon
									icon="ph:sun"
									className="ms-auto size-10 text-yellow-400"
								/>
							</div>

							{/* LANGUAGE */}
							<div className="mt-10 flex flex-wrap gap-2">
								{LANGUAGES.map((lng, i) => (
									<LanguageItem
										key={i}
										label={lng.label}
										icon={lng.icon}
										isActive={i == 0}
									/>
								))}
							</div>

							<div className="mx-auto my-10 h-0.5 w-1/2 rounded bg-dark-gray" />

							{/* FONT */}
							<div className="flex items-center">
								<Icon
									icon="gravity-ui:square-dashed-letter-a"
									className="size-10"
								/>
								<span className="mx-2">اندازه فونت</span>
							</div>

							<div className="mx-auto my-10 h-0.5 w-1/2 rounded bg-dark-gray" />

							<div className="mx-auto flex w-max items-center gap-2 rounded-full bg-dark-gray px-4 py-2">
								<img src={headphoneIcon} alt="contact us" />
								<p className="">09220781269</p>
							</div>

							<p className="mt-2 text-center text-lg">
								info@example.ir
							</p>
						</div>
					</div>
					<div
						onClick={() => setShowSettings(true)}
						className="absolute right-[1%] top-[1%] cursor-pointer"
					>
						<Icon
							icon="lets-icons:setting-alt-line"
							className="size-12"
						/>
					</div>

					<div className="flex h-full items-stretch justify-between gap-20 p-8">
						<div className="flex flex-1 items-center justify-center">
							<Outlet />
						</div>

						<div
							className="relative basis-[480px] space-y-10 bg-contain bg-no-repeat p-8"
							style={{ backgroundImage: `url(${sliderImage})` }}
						>
							<div className="space-y-4">
								<h1 className="text-6xl">لورم ایپسوم</h1>
								<h2 className="text-4xl">
									متن ساختگی با تولید سادگی
								</h2>
							</div>

							<div className="text-6xl">"</div>

							<p className="text-base">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
								مورد نیاز و کاربردهای متنوع با هدف بهبود
								ابزارهای کاربردی می باشد.
							</p>

							<div className="">
								<h4 className="text-2xl">لورم ایپسوم</h4>
								<h5 className="text-xl">
									لورم ایپسوم متن ساختگی
								</h5>
							</div>

							<div className="absolute bottom-2 right-4 flex w-1/4 items-center justify-between gap-3">
								<div className="cursor-pointer rounded-s-lg p-2 px-4 py-2 duration-200 hover:bg-primary">
									<Icon
										icon="bi:arrow-right"
										className="size-8"
									/>
								</div>
								<div className="cursor-pointer rounded-e-lg px-4 py-2 duration-200 hover:bg-primary">
									<Icon
										icon="bi:arrow-left"
										className="size-8"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
}
