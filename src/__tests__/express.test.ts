import { ServiceManager, SERVICE_APPLICATION } from ".."
import supertest from 'supertest';

describe('Application service', () => {
    it('Should start http server and create route', async () => {

        let expressServer = await ServiceManager.get<SERVICE_APPLICATION>(SERVICE_APPLICATION);

        expressServer?.createRoute('/test', ( router ) => {

            router.get('/test', (req, res) => {
                res.json({});
            })
        })

        await supertest(expressServer?.getExpressApplication())
            .get("/test/test34")
            .expect(404);

        await supertest(expressServer?.getExpressApplication())
            .get("/test/test")
            .expect(200);

    })
})