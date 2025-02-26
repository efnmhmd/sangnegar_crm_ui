import { UseFormProps, useForm } from 'react-hook-form';

export type LoginFormType = {
	username: string;
	password: string;
};

const useLoginForm = (props?: UseFormProps<LoginFormType>) => {
	return useForm<LoginFormType>(props);
};

export default useLoginForm;
