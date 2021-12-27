
/**
 * Responsible for DI Part of the system
 */
 export default class ServiceManager {
    public static services: { [serviceName: string]: any } = {};

    public static lazyLoadedServices: { [serviceName: string]: any } = {};

    /**
     * Register service with given name
     * 
     * @param serviceName 
     * @param service 
     */
    public static set<T>(serviceName: string, service: Function | T, options: {singleton: boolean} = {singleton: true} ): void {
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
    public static async get<T, P = null>(serviceName: string, params?: P ): Promise<T> {
        // if the service is singleton and it is instantiated already, return it
        if (ServiceManager.lazyLoadedServices[serviceName] !== void (0)) {
            return ServiceManager.lazyLoadedServices[serviceName];
        }

        if (ServiceManager.services[serviceName] !== void (0)) {

            // if the service is singleton and it is not instantiated yet
            if (typeof ServiceManager.services[serviceName].service === 'function') {
                    
                let service = await ServiceManager.services[serviceName].service(params || null);

                if(ServiceManager.services[serviceName].options.singleton === true){
                    ServiceManager.lazyLoadedServices[serviceName] = service;
                }

                return service;
            }

            return ServiceManager.services[serviceName];
        }

        throw new Error("Missing service with name " + serviceName);
    }
}