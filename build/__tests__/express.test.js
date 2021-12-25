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
const supertest_1 = __importDefault(require("supertest"));
describe('Application service', () => {
    it('Should start http server and create route', () => __awaiter(void 0, void 0, void 0, function* () {
        let expressServer = yield __1.ServiceManager.get(__1.SERVICE_APPLICATION);
        expressServer === null || expressServer === void 0 ? void 0 : expressServer.createRoute('/test', (router) => {
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
});
