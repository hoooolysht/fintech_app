import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const api = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
        reducerPath: "main",
        tagTypes: ["KPIs"],
        endpoints: (builder) => ({
            // this is a template for receiving APIs
            getKPIs: builder.query<void, void>({
                query: () => "kpi/kpis/",
                providesTags: ["KPIs"],
            }) 
        }),
});
// Action Creators
export const { useGetKPIsQuery } = api;
