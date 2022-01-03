
export default class SystemEvents {

    /**
     * Storage of all system events
     */
    private systemEvents: {[systemEventName: string]: (data: any) => Promise<any>} = {}; 

    /**
     * Register system event
     * 
     * @param systemEvent 
     * @param event 
     */
    public registerSystemEvent(systemEvent: string, event: (
        data: {
            /**
             * This is the fallback function, that was provided when event is called, in case of there is no event function registered
             */
            _fallbackFunction: Function, 
            [otherKeys: string]: any 
        }) => Promise<any> ){

        if(this.systemEvents[systemEvent] !== void(0)){
            throw new Error(`There is system event registered with name ${systemEvent}`)
        }

        this.systemEvents[systemEvent] = event;
    }

    /**
     * 
     * Fire registered system event
     * 
     * @param systemEvent 
     * @param data 
     * @param fallbackFunction - if provided and event function is not registered, instead of returning false, will return the result of calling this `fallbackFunction`
     * @returns `false` if event is not registered, otherwise return the result from calling the event handler
     */
    public async fireSystemEvent( systemEvent: string, data: any, fallbackFunction?: () => Promise<any> ): Promise<any> {

        if(this.systemEvents[systemEvent] === void(0) && fallbackFunction === void(0)){
            return false;
        }

        if(this.systemEvents[systemEvent] === void(0) && fallbackFunction !== void(0)){
            return (await fallbackFunction());
        }

        return (await this.systemEvents[systemEvent]({...data, _fallbackFunction: fallbackFunction}))
    }
}