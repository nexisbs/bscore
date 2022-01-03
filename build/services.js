"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_SYSTEM_EVENTS = exports.SERVICE_APPLICATION = void 0;
const Application_1 = __importDefault(require("./services/Application"));
const ServiceManager_1 = __importDefault(require("./services/ServiceManager"));
const SystemEvents_1 = __importDefault(require("./services/SystemEvents"));
/**
 * Service used for starting express application.
 *
 * To create server use `application.startServer()`
 *
 * For adding routes you should call `createRoute()` method, before starting the server
 *
 */
exports.SERVICE_APPLICATION = 'SERVICE_APPLICATION';
ServiceManager_1.default.set(exports.SERVICE_APPLICATION, () => {
    return new Application_1.default();
}, { singleton: true });
/**
 * Service used for creating a system events.
 * This events are used to **extend** microservice functionality.
 */
exports.SERVICE_SYSTEM_EVENTS = 'SERVICE_SYSTEM_EVENTS';
ServiceManager_1.default.set(exports.SERVICE_SYSTEM_EVENTS, () => {
    return new SystemEvents_1.default();
}, { singleton: true });
