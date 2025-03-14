import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

export const useSlabsQUery = (id: string) => {
	const query = useQuery({
		queryKey: ['app', 'Slab', 'coop', id],
		queryFn: queryFn(),
	});

	return query;
};
