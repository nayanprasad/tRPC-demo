import {publicProcedure, router} from '../trpc';
import {z} from 'zod';

export const userRouter = router({
    createUser: publicProcedure
        .input(z.object({name: z.string(), email: z.string().email()}))
        .output(z.object({name: z.string(), email: z.string().email()}))
        .mutation(async (opts) => {
            const {name, email} = opts.input;
            const user = {name, email};
            // Here you would typically save the user to a database
            console.log('Creating user:', user);
            return user;
        }),
    profile: publicProcedure
        .output(z.object({name: z.string(), email: z.string().email()}))
        .query(async (opts) => {
            const currUserId = opts.ctx.userId;

            if (!currUserId) {
                throw new Error('User not authenticated');
            }

            // Fetch user profile from database or any other source

            return {
                name: 'Hades',
                email: "hades@gmail.com"
            }
        }),
});

