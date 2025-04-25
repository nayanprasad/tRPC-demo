import {createHTTPServer} from '@trpc/server/adapters/standalone';
import {appRouter} from "./app";

const server = createHTTPServer({
    router: appRouter,
});

server.listen(5000);