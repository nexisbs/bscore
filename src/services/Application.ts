
import express, {Express, Router} from 'express';

export default class Application {

    private app: Express;

    constructor(){
        this.app = express();
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