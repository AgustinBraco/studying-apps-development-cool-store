import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constant/firebase';

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
	tagTypes: ['Categories'],
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => '/categories.json',
		}),
	}),
});

export const { useGetCategoriesQuery } = categoriesApi;