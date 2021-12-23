"use strict";
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
        // if the service is singleton and it is instantiated already, return it
        if (ServiceManager.lazyLoadedServices[serviceName] !== void (0)) {
            return ServiceManager.lazyLoadedServices[serviceName];
        }
        if (ServiceManager.services[serviceName] !== void (0)) {
            // if the service is singleton and it is not instantiated yet
            if (typeof ServiceManager.services[serviceName].service === 'function') {
                let service = ServiceManager.services[serviceName].service(params || null);
                if (ServiceManager.services[serviceName].options.singleton === true) {
                    ServiceManager.lazyLoadedServices[serviceName] = service;
                }
                return service;
            }
            return ServiceManager.services[serviceName];
        }
        return null;
    }
}
exports.default = ServiceManager;
ServiceManager.services = {};
ServiceManager.lazyLoadedServices = {};
