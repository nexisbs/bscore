import Application from "./services/Application";
import SystemEvents from "./services/SystemEvents";
/**
 * Service used for starting express application.
 *
 * To create server use `application.startServer()`
 *
 * For adding routes you should call `createRoute()` method, before starting the server
 *
 */
export declare let SERVICE_APPLICATION: 'SERVICE_APPLICATION';
export declare type SERVICE_APPLICATION = Application;
/**
 * Service used for creating a system events.
 * This events are used to **extend** microservice functionality.
 */
export declare let SERVICE_SYSTEM_EVENTS: 'SERVICE_SYSTEM_EVENTS';
export declare type SERVICE_SYSTEM_EVENTS = SystemEvents;
