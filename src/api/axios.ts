import _axios from 'axios';
import { toast } from 'react-toastify';
import useAuthStore from '@store/useAuthStore';

const url = import.meta.env.VITE_BASE_URL;
const tokenType = 'Bearer';

// Initialize Axios instance
const axios = _axios.create({
	baseURL: url,
	timeout: 60 * 1000,
	headers: { 'Content-Type': 'application/json' },
	validateStatus: (status) => status >= 200 && status < 300,
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

// Request interceptor for token refresh
axios.interceptors.request.use((config) => {
	if (config.url === '/token/') return config;

	const { refresh } = useAuthStore.getState();
	const accessExpireTime = localStorage.getItem('access-exp');
	const now = Date.now() / 1000;

	if (!refresh) return config;

	if (accessExpireTime && +accessExpireTime + 10 <= now) {
		axios.post(url + '/refresh/', { refresh }).then((res) => {
			if (res.data.access) {
				useAuthStore.getState().setToken(res.data.access, refresh);
			}
		});
	}

	return config;
});

// Response interceptor for handling 401 errors
axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			useAuthStore.getState().tokenExpired();
			toast.error(error.response.data.message || 'Session expired');
		} else {
			toast.error(error.message || 'An error occurred');
		}
		return Promise.reject(error);
	}
);


export default axios;