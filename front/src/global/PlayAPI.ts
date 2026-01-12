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
            providesTags: (result) => result ? 
                [...result.map(({ id }) => 
                    ({ type: "Players" as const, id})),
                    { type: "Players", id: "LIST" },
                ] : [{ type: "Players", id: "LIST" }]
        }),
        info: builder.query<IPlayer, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags:(result, error, id) => 
                [{ type: "Players", id }]
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
            invalidatesTags: [{ type: "Players", id: "LIST" }]
        }),
        delete: builder.mutation<void, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Players"]
        })
    })
});



