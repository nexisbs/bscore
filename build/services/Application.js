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
const express_1 = __importDefault(require("express"));
class Application {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    /**
     * Returns the express application
     *
     * @returns
     */
    getExpressApplication() {
        return this.app;
    }
    /**
     * Add route to the express server.
     * This should be called before calling `startServer` method
     *
     * @param basePath
     * @param routerFn
     */
    createRoute(basePath, routerFn) {
        let router = express_1.default.Router();
        routerFn(router);
        this.app.use(basePath, router);
    }
    /**
     * Add express middleware
     *
     * @param expressMiddleware
     */
    addMiddleware(expressMiddleware) {
        this.app.use(expressMiddleware);
    }
    /**
     * Start server to listen on the provided port
     *
     * @param options
     * @returns
     */
    startServer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.app.listen(options.port, () => {
                    console.log(`App listening at http://localhost:${options.port}`);
                    resolve(true);
                });
            });
        });
    }
}
exports.default = Application;
