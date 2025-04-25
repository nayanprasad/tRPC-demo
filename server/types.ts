import {appRouter} from "./app";

export type AppRouter = typeof appRouter;

export type AppContext = {
    userId?: string;
}