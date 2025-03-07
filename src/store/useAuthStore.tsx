import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';

type AuthStoreType = {
	access: string | null;
	refresh: string | null;
	setToken: (access: string, refresh: string) => void;
	tokenExpired: () => void;
};

const useAuthStore = create<AuthStoreType>()((set) => ({
	access: localStorage.getItem('access'),
	refresh: localStorage.getItem('refresh'),
	setToken: (access, refresh) => {
		const decoded = jwtDecode(access);
		localStorage.setItem('access', access);
		if (decoded.exp)
			localStorage.setItem('access-exp', decoded.exp.toString());
		localStorage.setItem('refresh', refresh);
		set({ access, refresh });
	},
	tokenExpired: () => {
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		set({ access: null, refresh: null });
	},
}));

export default useAuthStore;
