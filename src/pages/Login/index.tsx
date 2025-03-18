import { FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import { ERROR_CODE } from '@constant/ErrorCodes';
import useLoginForm from '@hooks/form/useLoginForm';
import useLoginMutation from '@hooks/mutation/useLogin';
import useAuthStore from '@store/useAuthStore';

function Login() {
	const loginForm = useLoginForm({ reValidateMode: 'onSubmit' });
	const loginMutation = useLoginMutation();
	const navigate = useNavigate();

	const { setToken } = useAuthStore();

	const handleLoginSubmit = loginForm.handleSubmit((data) => {
		loginMutation
			.mutateAsync(data)
			.then((res) => {
				setToken(res.data.access, res.data.refresh);
				toast.success('با موفقیت وارد شدید');
				navigate('/store');
			})
			.catch((err) => toast.error(ERROR_CODE[err.code]));
	});

	return (
		<FormProvider {...loginForm}>
			<form
				className="h-full w-full space-y-10 overflow-auto px-4"
				onSubmit={handleLoginSubmit}
			>
				<div>
					<h2 className="text-4xl">خوش آمدید</h2>
					<p className="mt-5 md:text-2xl">
						لطفا اطلاعات کاربری خود را وارد کنید
					</p>
				</div>

				<div className="space-y-4">
					<div className="space-y-4">
						<label className="ps-2">نام کاربری</label>
						<Input
							placeholder="********"
							{...loginForm.register('username', {
								required: true,
							})}
						/>
					</div>

					<div className="space-y-4">
						<label className="ps-2">کلمه عبور</label>
						<Input
							type="password"
							placeholder="********"
							{...loginForm.register('password', {
								required: true,
							})}
						/>
					</div>

					<div className="flex items-center justify-between px-2">
						<div className="flex items-center justify-center gap-2">
							<Checkbox label="مرا به خاطر بسپار" />
						</div>
						<a href="">فراموشی رمز عبور</a>
					</div>
				</div>

				<button
					disabled={loginMutation.isPending}
					className="w-full rounded-full border border-primary-dark bg-transparent p-3 text-center text-xl font-semibold duration-200 hover:bg-primary-dark disabled:bg-gray-300"
				>
					ورود
				</button>
			</form>
		</FormProvider>
	);
}

export default Login;
