import { Icon } from '@iconify/react/dist/iconify.js';

function Profile() {
	return (
		<div className="h-[80vh] rounded-xl rounded-e-[24px] rounded-s-[32px] border-2 border-primary bg-black/35 p-4">
			<div>
				<h1 className="text-2xl font-medium leading-[36.69px]">
					حساب کاربری
				</h1>
				<p className="text-base font-medium leading-[26.46px]">
					برای تعییر اطلاعات حساب کاربری با مدیر فروش ارتلاط برقرار
					کنید.
				</p>
			</div>

			<div className="mt-4">
				<h2 className="border-b border-b-gray-600 pb-3 text-xl font-light leading-[30.58px]">
					اطلاعات شخصی
				</h2>

				<div className="mt-4 grid grid-cols-[1fr_2.5fr_2.5fr_2.5fr] grid-rows-2 gap-4">
					<div className="row-span-2 flex aspect-square flex-col items-center justify-center rounded-3xl border border-gray-400">
						<Icon
							icon="fe:plus"
							width="24"
							height="24"
							className="size-10"
						/>
						<span className="text-2xl font-light">عکس پروفایل</span>
					</div>
					<div className="col-start-2 row-start-1 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
					<div className="col-start-2 row-start-2 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
					<div className="col-start-3 row-start-1 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
					<div className="col-start-3 row-start-2 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
					<div className="col-start-4 row-start-1 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
					<div className="col-start-4 row-start-2 flex flex-col gap-2">
						<label htmlFor="" className="ms-2 text-xs">
							توضیحات
						</label>
						<div className="rounded-xl border border-white/50 bg-black/25 p-2">
							<input
								type="text"
								className="border-none bg-transparent outline-none"
								defaultValue="به صورت نقد"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<h2 className="border-b border-b-gray-600 pb-3 text-xl font-light leading-[30.58px]">
					آدرس پستی
				</h2>

				<div className="mt-4 flex items-center justify-between gap-4">
					<div>
						<div className="mt-4 flex items-center justify-between gap-4">
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									کشور
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="ایران"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									استان
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="اصفهان"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									شهر
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="اصفهان"
									/>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<h3 className="pb-3 text-xl font-light leading-[30.58px]">
								آدرس 1
							</h3>
							<div className="rounded-[20px] border border-gray-400 p-3 text-base font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
								مورد نیاز و کاربردهای متنوع با هدف بهبود
								ابزارهای کاربردی می باشد.
							</div>
						</div>
					</div>
					<div>
						<div className="mt-4 flex items-center justify-between gap-4">
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									کشور
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="ایران"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									استان
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="اصفهان"
									/>
								</div>
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<label htmlFor="" className="ms-2 text-xs">
									شهر
								</label>
								<div className="rounded-xl border border-white/50 bg-black/25 p-2">
									<input
										type="text"
										className="border-none bg-transparent outline-none"
										defaultValue="اصفهان"
									/>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<h3 className="pb-3 text-xl font-light leading-[30.58px]">
								آدرس 2
							</h3>
							<div className="rounded-[20px] border border-gray-400 p-3 text-base font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است.
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
								مورد نیاز و کاربردهای متنوع با هدف بهبود
								ابزارهای کاربردی می باشد.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
