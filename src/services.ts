import Application from "./services/Application";
import ServiceManager from "./services/ServiceManager";


/**
 * Service used for starting express application.
 * 
 * To create server use `application.startServer()`
 * 
 * For adding routes you should call `createRoute()` method, before starting the server
 * 
 */
export let SERVICE_APPLICATION: 'SERVICE_APPLICATION' = 'SERVICE_APPLICATION';
export type SERVICE_APPLICATION = Application;

ServiceManager.set(SERVICE_APPLICATION, () => {
     
    return new Application();
}, { singleton: true });