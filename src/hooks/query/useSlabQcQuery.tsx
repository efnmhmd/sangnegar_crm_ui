import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useSlabQcQuery() {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: ['app', 'SlabQC'],
	});

	return query;
}

export default useSlabQcQuery;
