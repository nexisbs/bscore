import Application from "./services/Application";
import ServiceManager from "./services/ServiceManager";
import SystemEvents from "./services/SystemEvents";


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


/**
 * Service used for creating a system events. 
 * This events are used to **extend** microservice functionality.
 */
 export let SERVICE_SYSTEM_EVENTS: 'SERVICE_SYSTEM_EVENTS' = 'SERVICE_SYSTEM_EVENTS';
 export type SERVICE_SYSTEM_EVENTS = SystemEvents;
 
 ServiceManager.set(SERVICE_SYSTEM_EVENTS, () => {
      
     return new SystemEvents();
 }, { singleton: true });