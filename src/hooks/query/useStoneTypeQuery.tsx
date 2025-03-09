import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useStoneTypeQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'StoneType', id] : ['app', 'StoneType'],
	});

	return query;
}

export default useStoneTypeQuery;
