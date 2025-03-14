import _axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import useAuthStore from '@store/useAuthStore';
import { AuthResponse, RetryRequestConfig } from '@/types/axios.type';


const url = import.meta.env.VITE_BASE_URL;
const tokenType = 'Bearer';

const axios = _axios.create({
	baseURL: url,
	timeout: 60 * 1000,
	headers: { 'Content-Type': 'application/json' },
});

// Set initial token if available
const setInitialToken = () => {
	const { access } = useAuthStore.getState();
	if (access) {
		axios.defaults.headers.common['Authorization'] = `${tokenType} ${access}`;
	}
};
setInitialToken();

// Subscribe to token changes
useAuthStore.subscribe((state) => {
	if (state.access) {
		axios.defaults.headers.common['Authorization'] = `${tokenType} ${state.access}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
});


axios.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as RetryRequestConfig
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			console.log('start for refresh token');
			try {
				const { refresh } = useAuthStore.getState();
				if (!refresh) return Promise.reject(error);
				const response = await _axios.post<AuthResponse>(import.meta.env.VITE_BASE_URL + '/token/refresh/', { refresh })
				const { access } = response.data
				useAuthStore.getState().setToken(access, refresh);
				setInitialToken()
				return axios(originalRequest);
			} catch (error) {
				console.error('Token refresh failed:', error);
				localStorage.removeItem('access');
				localStorage.removeItem('refresh');
				window.location.href = '/login';
				return Promise.reject(error);
			}
		}
		return Promise.reject(error);
	}
);


export default axios;