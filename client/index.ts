import {createTRPCClient, httpBatchLink} from '@trpc/client';
import type {AppRouter} from '../server/types';

const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:5000',
            async headers() {
                return {
                    Authorization: "Bearer 12345", // This is just a placeholder. You can replace it with the actual token (from localStorage).
                }
            }
        }),
    ],
});

const createUser = async () => {
    const createUserResponse = await trpc.createUser.mutate({name: "Hades", email: "hades@gmail.com"})
}

const getProfile = async () => {
    const profileResponse = await trpc.profile.query();
    console.log('Profile:', profileResponse);
}

// createUser();
getProfile();