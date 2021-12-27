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
     * example usage:
     * ```
     * expressServer.createRoute('/test', ( router ) => {

            router.get('/test', (req, res) => {
                res.json({});
            })
       })
     * ```
     *
     * @param basePath
     * @param routerFn
     */
    createRouter(basePath: string, routerFn: (router: Router) => void): void;
    /**
     * Add express middleware
     *
     * @param expressMiddleware
     */
    addMiddleware(expressMiddleware: any): void;
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
