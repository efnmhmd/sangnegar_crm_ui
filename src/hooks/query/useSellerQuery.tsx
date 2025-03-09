import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useSellerQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'Seller', id] : ['app', 'Seller'],
	});

	return query;
}

export default useSellerQuery;
