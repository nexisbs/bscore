"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const joi_1 = __importDefault(require("joi"));
const supertest_1 = __importDefault(require("supertest"));
const services_1 = require("../services");
const ServiceManager_1 = __importDefault(require("../services/ServiceManager"));
describe('Application service', () => {
    it('Should start http server and create route', () => __awaiter(void 0, void 0, void 0, function* () {
        let expressServer = yield ServiceManager_1.default.get(services_1.SERVICE_APPLICATION);
        expressServer.createRouter('/test', (router) => {
            router.get('/test', (req, res) => {
                res.json({});
            });
        });
        yield (0, supertest_1.default)(expressServer === null || expressServer === void 0 ? void 0 : expressServer.getExpressApplication())
            .get("/test/test34")
            .expect(404);
        yield (0, supertest_1.default)(expressServer === null || expressServer === void 0 ? void 0 : expressServer.getExpressApplication())
            .get("/test/test")
            .expect(200);
    }));
    it('Should test validation middleware', () => __awaiter(void 0, void 0, void 0, function* () {
        let expressServer = yield ServiceManager_1.default.get(services_1.SERVICE_APPLICATION);
        expressServer.createRouter('/test', (router) => {
            router.post('/test', (0, __1.ValidateMiddleware)(joi_1.default.object({ username: joi_1.default.string() })), (req, res) => {
                res.json({});
            });
        });
        yield (0, supertest_1.default)(expressServer === null || expressServer === void 0 ? void 0 : expressServer.getExpressApplication())
            .post("/test/test")
            .send({ username: 2 })
            .expect(500);
    }));
});
