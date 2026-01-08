import { configureStore } from "@reduxjs/toolkit";

export const RED = configureStore({
    reducer: {
        players: () => "The Players with Zod!"
    }
});

export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


