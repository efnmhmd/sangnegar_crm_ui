import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function usePaymentQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'Payment', id] : ['app', 'Order'],
	});

	return query;
}

export default usePaymentQuery;
