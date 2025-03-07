import { type QueryFunctionContext } from '@tanstack/react-query';
import axios from './axios';

type OptionsType = {
	method?: 'GET' | 'POST';
};

const queryFn =
	(options: OptionsType = {}) =>
		(ctx: QueryFunctionContext) => {
			return axios.request({
				method: 'GET',
				url: `/${ctx.queryKey.join('/')}` + '/',
				...options,
			});
		};

export default queryFn;
