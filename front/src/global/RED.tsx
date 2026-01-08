import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PlayAPI } from "./PlayAPI";

export const RED = configureStore({
    reducer: {
        [PlayAPI.reducerPath]: PlayAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(PlayAPI.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


