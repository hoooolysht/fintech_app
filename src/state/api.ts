import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const api = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
        reducerPath: "main",
        tagTypes: ["KPIs"],
        endpoints: (builder) => ({
            getKPIs: builder.query<void, void>({
                query: () => "kpi/kpis/",
                providesTags: ["KPIs"],
            }) // this is a template for receiving APIs
        }),
});
// Action Creators
export const { useGetKPIsQuery } = api;
