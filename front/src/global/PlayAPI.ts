import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlay, IPlayer } from "../models/Interfaces";
const URL = "http://localhost:9000/api/players";

export const PlayAPI = createApi({
    reducerPath: "PlayAPI",
    tagTypes: ["Players"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        allPlayers: builder.query<IPlayer[], void>({
            query: () => ({
                url: "/",
                method: "GET"
            }),
            providesTags: ["Players"]
        }),
        info: builder.query<IPlayer, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags: ["Players"]
        }),
        add: builder.mutation<IPlay, IPlay>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Players"]
        }),
        update: builder.mutation<IPlayer, IPlayer>({
            query: ({id, ...payload}) => ({
                url: `/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Players"]
        }),
        delete: builder.mutation<void, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Players"]
        })
    })
});



