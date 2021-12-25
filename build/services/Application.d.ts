import { Express, Router } from 'express';
export default class Application {
    private app;
    constructor();
    /**
     * Returns the express application
     *
     * @returns
     */
    getExpressApplication(): Express;
    /**
     * Add route to the express server.
     * This should be called before calling `startServer` method
     *
     * @param basePath
     * @param routerFn
     */
    createRoute(basePath: string, routerFn: (router: Router) => void): void;
    /**
     * Start server to listen on the provided port
     *
     * @param options
     * @returns
     */
    startServer(options: {
        port: number;
    }): Promise<any>;
}