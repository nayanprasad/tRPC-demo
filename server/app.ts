import {router} from './trpc';
import {userRouter} from "./routers/user-router";

export const appRouter = router({
    user: userRouter
});

