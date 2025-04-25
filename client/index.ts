import {createTRPCClient, httpBatchLink} from '@trpc/client';
import type {AppRouter} from '../server/types';

const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:5000',
        }),
    ],
});

const createUser = async () => {
    const createUserResponse = await trpc.createUser.mutate({name: "Hades", email: "hades@gmail.com"})
}

createUser();