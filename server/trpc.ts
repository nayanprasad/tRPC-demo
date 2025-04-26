import {initTRPC} from '@trpc/server';
import {AppContext} from "./types";

const t = initTRPC.context<AppContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;