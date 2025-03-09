import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useSlabQuery() {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: ['app', 'Slab'],
		staleTime: Infinity,
	});

	return query;
}

export default useSlabQuery;
