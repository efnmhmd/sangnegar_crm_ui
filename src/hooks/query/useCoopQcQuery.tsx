import React from 'react';
import queryFn from '@api/queryFn';
import { useQuery } from '@tanstack/react-query';

function useCoopQcQuery(id?: string) {
	const query = useQuery({
		queryFn: queryFn(),
		queryKey: id ? ['app', 'CoopQC', id] : ['app', 'CoopQC'],
	});

	return query;
}

export default useCoopQcQuery;
