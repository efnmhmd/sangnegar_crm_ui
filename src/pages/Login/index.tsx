import Checkbox from '@components/Checkbox';
import Input from '@components/Input';

function Login() {
	return (
		<form className="w-full space-y-10">
			<div>
				<h2 className="text-4xl">خوش آمدید</h2>
				<p className="mt-5 text-2xl">
					لطفا اطلاعات کاربری خود را وارد کنید
				</p>
			</div>

			<div className="space-y-4">
				<div className="space-y-4">
					<label className="ps-2">شماره موبایل</label>
					<Input placeholder="*******0922" />
				</div>

				<div className="space-y-4">
					<label className="ps-2">کلمه عبور</label>
					<Input type="password" placeholder="********" />
				</div>

				<div className="flex items-center justify-between px-2">
					<div className="flex items-center justify-center gap-2">
						<Checkbox label="مرا به خاطر بسپار" />
					</div>
					<a href="">فراموشی رمز عبور</a>
				</div>
			</div>

			<button className="w-full rounded-full border border-primary-dark bg-transparent p-3 text-center text-xl font-semibold duration-200 hover:bg-primary-dark">
				ورود
			</button>
		</form>
	);
}

export default Login;
