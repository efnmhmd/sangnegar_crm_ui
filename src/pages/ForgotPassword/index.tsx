import React from 'react';
import Input from '@components/Input';
import { Icon } from '@iconify/react/dist/iconify.js';

function ForgotPassword() {
	return (
		<form className="flex h-[80%] w-full flex-col justify-around space-y-10">
			<div>
				<h2 className="text-4xl">تایید دو مرحله ای</h2>
				<p className="mt-5 text-2xl">لطفا کد پیامک شده را وارد کنید </p>
			</div>

			<div className="space-y-8">
				<div className="space-y-4">
					<div className="space-y-4">
						<label className="ps-2">شماره موبایل</label>
						<Input
							placeholder="*******0922"
							icon={
								<Icon
									icon="bxs:send"
									className="size-7 rotate-180"
								/>
							}
						/>
					</div>
					<div className="space-y-4">
						<label className="ps-2">کد تایید</label>
						<Input placeholder="*******" />
					</div>
				</div>

				<button className="w-full rounded-full border border-primary-dark bg-transparent p-3 text-center text-xl font-semibold duration-200 hover:bg-primary-dark">
					دریافت کلمه عبور
				</button>
			</div>
		</form>
	);
}

export default ForgotPassword;
