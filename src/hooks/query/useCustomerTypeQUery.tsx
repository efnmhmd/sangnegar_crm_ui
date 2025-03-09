import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useCustomerTypeQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'CustomerType', id] : ['app', 'CustomerType'],
	});

	return query;
}

export default useCustomerTypeQuery;
