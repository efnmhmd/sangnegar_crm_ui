import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useCoopOrderItemQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'CoopOrderItem', id] : ['app', 'CoopOrderItem'],
	});
	return query;
}

export default useCoopOrderItemQuery;
