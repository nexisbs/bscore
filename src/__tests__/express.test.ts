import { ValidareMiddleware } from ".."
import joi from 'joi';
import supertest from 'supertest';
import { SERVICE_APPLICATION } from "../services";
import ServiceManager from "../services/ServiceManager";

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

    it('Should test validation middleware', async () => {

        let expressServer = await ServiceManager.get<SERVICE_APPLICATION>(SERVICE_APPLICATION);

        expressServer?.createRoute('/test', ( router ) => {

            router.post('/test', ValidareMiddleware(joi.object({username: joi.string()})) , (req, res) => {
                res.json({});
            })
        })

        await supertest(expressServer?.getExpressApplication())
            .post("/test/test")
            .send({ username: 2 })
            .expect(500);
 


    })
})