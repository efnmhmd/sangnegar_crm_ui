import { AxiosResponse } from 'axios';
import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';
import { CustomerType } from '@/types/Customer.type';

function useSingleCustomerQuery(id: number) {
	const query = useQuery<AxiosResponse<CustomerType>>({
		queryFn: queryFn(),
		queryKey: ['app', 'Customer', id],
		enabled: Boolean(id),
	});

	return query;
}

export default useSingleCustomerQuery;
