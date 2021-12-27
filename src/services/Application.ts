
import express, {Express, Router} from 'express';

export default class Application {

    private app: Express;

    constructor(){
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    /**
     * Returns the express application
     * 
     * @returns 
     */
    public getExpressApplication() : Express {
        return this.app;
    }

    /**
     * Add route to the express server. 
     * This should be called before calling `startServer` method
     * 
     * @param basePath 
     * @param routerFn 
     */
    public createRoute(basePath: string, routerFn: (router: Router) => void){
        let router = express.Router();

        routerFn(router);

        this.app.use(basePath, router);
    }

    /**
     * Add express middleware
     * 
     * @param expressMiddleware 
     */
    public addMiddleware(expressMiddleware){

        this.app.use(expressMiddleware);
    }

    /**
     * Start server to listen on the provided port
     * 
     * @param options 
     * @returns 
     */
    public async startServer(options: {
        port: number
    }): Promise<any> {

        return new Promise((resolve, reject) => {
            this.app.listen(options.port, () => {
                console.log(`App listening at http://localhost:${options.port}`);
                resolve(true);
            })
        })
    }

}