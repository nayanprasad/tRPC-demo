import {publicProcedure, router} from './trpc';
import {z} from 'zod';

export const appRouter = router({
    createUser: publicProcedure
        .input(z.object({name: z.string(), email: z.string().email()}))
        .mutation(async (opts) => {
            const {name, email} = opts.input;
            const user = {name, email};
            console.log('Creating user:', user);
            return user;
        })
});

