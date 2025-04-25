import {createHTTPServer} from '@trpc/server/adapters/standalone';
import {appRouter} from "./app";

const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        // This is where you can create a context for your procedures

        let authHeader = opts.req.headers['authorization'];
        console.log('Auth header:', authHeader);

        // You can use the auth header to verify and get the user ID or any other information

        return {
            userId: "12345", // The type is same as the AppContext.
        };
    }
});

server.listen(5000);