import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';

type SlabStoreType = {
	slabs: number[];
	selectSlab: (slabId: number) => void;
};

const useSlabStore = create<SlabStoreType>()((set) => ({
	slabs: [],
	selectSlab: (slabId: number) => {
		set((state) => {
			if (state.slabs.find((slab) => slab === slabId)) {
				const updatedSlab = state.slabs.filter(
					(slab) => slab !== slabId,
				);
				return { slabs: updatedSlab };
			}

			const updatedSlab = [...state.slabs, slabId];
			return { slabs: updatedSlab };
		});
	},
}));

export default useSlabStore;
