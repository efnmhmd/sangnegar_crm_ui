import useAuthStore from '@store/useAuthStore';
import _axios from 'axios';
import { toast } from 'react-toastify';

const storedToken = localStorage.getItem('access');

// const url = import.meta.env.URL
const url = 'http://185.73.113.49:8000'

// const token_type = import.meta.env.URL // like JWT or Berear
const token_type = 'Berear' // like JWT or Berear


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


axios.interceptors.request.use(function (config) {
	if (config.url === '/token/') return config

	const { refresh, setToken } = useAuthStore()
	const accessExpireTime = localStorage.getItem('access-exp')
	const now = Date.now() / 1000

	if (!refresh) return config

	if (accessExpireTime && +accessExpireTime + 10 >= now) {
		axios.post(url + '/refresh/', { refresh }).then(res => {
			if (res.data.access) setToken(res.data.access, refresh)
		})
	} else {
		console.log('token is valid');
	}

	return config;
}, function (error) {
	return Promise.reject(error);
})

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
