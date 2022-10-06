import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key','d503f19cabmshd38d427f55db696p17230cjsnf3d14eca4bac')
                return headers;
            }
        }),
        endpoints: (builder) => ({
         getTopCharts: builder.query({query:() =>'/charts/world'}),//can't set string, need to make it dynamic

        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;
