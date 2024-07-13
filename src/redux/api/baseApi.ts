import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
   
         if(token){
         headers.set('authorization', `${token}`)
         }
    }
});

const baseQueryWithRefressToken= async(args,api,extraOptions) =>{
 const result = baseQuery(args,api,extraOptions);
 console.log(result);
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefressToken,
    endpoints: () => ({})
})