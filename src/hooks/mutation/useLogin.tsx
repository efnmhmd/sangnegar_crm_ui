import { AxiosResponse } from 'axios';
import axios from '@api/axios';
import { LoginFormType } from '@hooks/form/useLoginForm';
import { useMutation } from '@tanstack/react-query';

type LoginResponseType = {
	access: string;
	refresh: string;
};

const useLoginMutation = () => {
	return useMutation<AxiosResponse<LoginResponseType>, void, LoginFormType>({
		mutationFn: (authData) => axios.post('/token/', authData),
	});
};

export default useLoginMutation;
