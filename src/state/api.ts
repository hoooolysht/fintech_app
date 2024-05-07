import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

// Define a service using a base URL and expected endpoints

export  const api = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
        reducerPath: "main",
        tagTypes: ["KPIs"],
        endpoints: (build) => ({
            // this is a template for receiving APIs
            getKPIs: build.query <Array<GetKpisResponse>, void>({
                query: () => "kpi/kpis/",
                providesTags: ["KPIs"],
            }) 
        }),
});
// Action Creators
export const { useGetKPIsQuery } = api;
