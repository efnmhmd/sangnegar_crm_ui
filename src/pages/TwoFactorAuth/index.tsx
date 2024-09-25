import React from 'react';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import { Icon } from '@iconify/react/dist/iconify.js';

function TwoFactorAuth() {
	return (
		<form className="flex h-[80%] w-full flex-col justify-around space-y-10">
			<div>
				<h2 className="text-4xl">تایید دو مرحله ای</h2>
				<p className="mt-5 text-2xl">لطفا کد پیامک شده را وارد کنید </p>
			</div>

			<div className="space-y-8">
				<div className="space-y-4">
					<div className="space-y-4">
						<label className="ps-2">کد تایید</label>
						<Input
							placeholder="کد تایید را وارد کنید"
							icon={
								<Icon
									icon="heroicons:arrow-path-solid"
									className="size-7"
								/>
							}
						/>
					</div>
				</div>

				<button className="w-full rounded-full border border-primary-dark bg-transparent p-3 text-center text-xl font-semibold duration-200 hover:bg-primary-dark">
					ورود
				</button>
			</div>
		</form>
	);
}

export default TwoFactorAuth;
