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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Responsible for DI Part of the system
 */
class ServiceManager {
    /**
     * Register service with given name
     *
     * @param serviceName
     * @param service
     */
    static set(serviceName, service, options = { singleton: true }) {
        // adding service in another phase of the application lifecycle
        if (ServiceManager.services[serviceName] !== void (0)) {
            throw new Error(`Service ${serviceName} is not unique`);
        }
        ServiceManager.services[serviceName] = { service, options };
    }
    /**
     * Return registered service by name.
     *
     * @param serviceName - the name of the service. All services begin with `SERVICE_`
     */
    static get(serviceName, params) {
        return __awaiter(this, void 0, void 0, function* () {
            // if the service is singleton and it is instantiated already, return it
            if (ServiceManager.lazyLoadedServices[serviceName] !== void (0)) {
                return ServiceManager.lazyLoadedServices[serviceName];
            }
            if (ServiceManager.services[serviceName] !== void (0)) {
                // if the service is singleton and it is not instantiated yet
                if (typeof ServiceManager.services[serviceName].service === 'function') {
                    let service = yield ServiceManager.services[serviceName].service(params || null);
                    if (ServiceManager.services[serviceName].options.singleton === true) {
                        ServiceManager.lazyLoadedServices[serviceName] = service;
                    }
                    return service;
                }
                return ServiceManager.services[serviceName];
            }
            throw new Error("Missing service with name " + serviceName);
        });
    }
}
exports.default = ServiceManager;
ServiceManager.services = {};
ServiceManager.lazyLoadedServices = {};
