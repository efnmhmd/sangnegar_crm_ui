import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useSlabOrderItem(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'SlabOrderItem', id] : ['app', 'SlabOrderItem'],
	});

	return query;
}

export default useSlabOrderItem;
