"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_APPLICATION = void 0;
const Application_1 = __importDefault(require("./services/Application"));
const ServiceManager_1 = __importDefault(require("./services/ServiceManager"));
/**
 * Service used for starting express application.
 *
 * To create server
 *
 */
exports.SERVICE_APPLICATION = 'SERVICE_APPLICATION';
ServiceManager_1.default.set(exports.SERVICE_APPLICATION, () => {
    return new Application_1.default();
}, { singleton: true });
