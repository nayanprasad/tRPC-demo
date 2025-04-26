import {TRPCError} from "@trpc/server";
import {middleware} from "./trpc";

export const isAuthenticated = middleware(async (opts) => {
    const {ctx} = opts;
    const userId = ctx.userId;

    if (!userId) {
        throw new TRPCError({code: "UNAUTHORIZED"})
    }

    // Other validations can be done here

    return opts.next()
})