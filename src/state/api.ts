import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

// Define a service using a base URL and expected endpoints

export  const api = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
        reducerPath: "main",
        tagTypes: ["KPIs", "Products", "Transactions"],
        endpoints: (build) => ({
            // this is a template for receiving APIs
            getKPIs: build.query <Array<GetKpisResponse>, void>({
                query: () => "kpi/kpis/",
                providesTags: ["KPIs"],
            }),
            getProducts: build.query <Array<GetProductsResponse>, void>({
                query: () => "product/products/",
                providesTags: ["Products"],
            }),
            getTransactions: build.query <Array<GetTransactionsResponse>, void>({
                query: () => "transaction/transactions/",
                providesTags: ["Transactions"],
            })  
        }),
});
// Action Creators
export const { useGetKPIsQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
