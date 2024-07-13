import { baseApi } from "../api/baseApi";


const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllsemester: builder.query({
          query: () => ({
            url: '/academic-semester',
            method: 'GET',
            
          }),
        }),
      }),
});

export const { useGetAllsemesterQuery} = academicSemesterApi 