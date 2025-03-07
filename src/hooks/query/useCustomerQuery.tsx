import { AxiosResponse } from 'axios';
import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';
import { CustomerType } from '@/types/Customer.type';

function useCustomerQuery() {
	const query = useQuery<AxiosResponse<CustomerType[]>>({
		queryFn: queryFn(),
		queryKey: ['app', 'Customer'],
	});

	return query;
}

export default useCustomerQuery;
