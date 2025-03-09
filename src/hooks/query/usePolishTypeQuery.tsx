import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function usePolishTypeQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'PolishType', id] : ['app', 'PolishType'],
	});

	return query;
}

export default usePolishTypeQuery;
