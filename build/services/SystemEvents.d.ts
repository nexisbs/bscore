export default class SystemEvents {
    /**
     * Storage of all system events
     */
    private systemEvents;
    /**
     * Register system event
     *
     * @param systemEvent
     * @param event
     */
    registerSystemEvent(systemEvent: string, event: (data: {
        /**
         * This is the fallback function, that was provided when event is called, in case of there is no event function registered
         */
        _fallbackFunction: Function;
        [otherKeys: string]: any;
    }) => Promise<any>): void;
    /**
     *
     * Fire registered system event
     *
     * @param systemEvent
     * @param data
     * @param fallbackFunction - if provided and event function is not registered, instead of returning false, will return the result of calling this `fallbackFunction`
     * @returns `false` if event is not registered, otherwise return the result from calling the event handler
     */
    fireSystemEvent(systemEvent: string, data: any, fallbackFunction?: () => Promise<any>): Promise<any>;
}
