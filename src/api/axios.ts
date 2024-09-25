import _axios from 'axios';
import { toast } from 'react-toastify';
import useAuthStore from '@store/useAuthStore';

const storedToken = localStorage.getItem('access');

const url = import.meta.env.URL

const token_type = import.meta.env.URL // like JWT or Berear


const axios = _axios.create({
	baseURL: url,
	timeout: 60 * 1000, // 60 secs
	headers: {
		'Content-Type': 'application/json',
		...(storedToken ? { Authorization: `${token_type} ${storedToken}` } : {}),
	},
	validateStatus: function (status) {
		return status >= 200 && status < 300; // default
	},
});

export const setApiToken = (token: string | null) => {
	if (token) axios.defaults.headers.common['Authorization'] = `${token_type} ${token}`;
	else delete axios.defaults.headers.common['Authorization'];
};

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			const { status, data } = error.response;

			if (status === 401) {
				useAuthStore.getState().tokenExpired();
				toast.error(data.message, { toastId: data.message });
			}
		} else {
			console.error(error);
			toast.error(error.message, { toastId: error.message });
		}

		return Promise.reject(error);
	},
);

export default axios;
