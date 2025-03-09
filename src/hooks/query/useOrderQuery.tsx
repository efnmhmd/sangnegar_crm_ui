import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useOrderQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'Order', id] : ['app', 'Order'],
	});

	return query;
}

export default useOrderQuery;
