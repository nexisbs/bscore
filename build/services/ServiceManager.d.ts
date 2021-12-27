/**
 * Responsible for DI Part of the system
 */
export default class ServiceManager {
    static services: {
        [serviceName: string]: any;
    };
    static lazyLoadedServices: {
        [serviceName: string]: any;
    };
    /**
     * Register service with given name
     *
     * @param serviceName
     * @param service
     */
    static set<T>(serviceName: string, service: Function | T, options?: {
        singleton: boolean;
    }): void;
    /**
     * Return registered service by name.
     *
     * @param serviceName - the name of the service. All services begin with `SERVICE_`
     */
    static get<T, P = null>(serviceName: string, params?: P): Promise<T>;
}
