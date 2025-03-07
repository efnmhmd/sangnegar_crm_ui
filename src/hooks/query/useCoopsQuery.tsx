import { AxiosResponse } from 'axios';
import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';
import { StoneType } from '@/types/Stone.type';

const useCoopQuery = () => {
	const query = useQuery<AxiosResponse<StoneType[]>>({
		queryKey: ['app', 'Coop'],
		queryFn: queryFn(),
		staleTime: Infinity,
	});

	return query;
};

export default useCoopQuery;
