import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { setApiToken } from '@api/axios';

type AuthStoreType = {
	access: string | null;
	refresh: string | null;
	setToken: (access: string, refresh: string) => void;
	tokenExpired: () => void;
};

const useAuthStore = create<AuthStoreType>()((set) => ({
	access: localStorage.getItem('access'),
	refresh: localStorage.getItem('access'),
	setToken: (access, refresh) => {
		const decoded = jwtDecode(access);
		localStorage.setItem('access', access);
		if (decoded.exp)
			localStorage.setItem('access-exp', decoded.exp.toString());
		localStorage.setItem('refresh', refresh);

		set((state) => ({ ...state, access, refresh }));
		setApiToken(access);
	},
	tokenExpired: () => {
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		set((state) => ({ ...state, access: null, refresh: null }));
		setApiToken(null);
	},
}));

export default useAuthStore;
