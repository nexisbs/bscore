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
class SystemEvents {
    constructor() {
        /**
         * Storage of all system events
         */
        this.systemEvents = {};
    }
    /**
     * Register system event
     *
     * @param systemEvent
     * @param event
     */
    registerSystemEvent(systemEvent, event) {
        if (this.systemEvents[systemEvent] !== void (0)) {
            throw new Error(`There is system event registered with name ${systemEvent}`);
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
    fireSystemEvent(systemEvent, data, fallbackFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.systemEvents[systemEvent] === void (0) && fallbackFunction === void (0)) {
                return false;
            }
            if (this.systemEvents[systemEvent] === void (0) && fallbackFunction !== void (0)) {
                return (yield fallbackFunction());
            }
            return (yield this.systemEvents[systemEvent](Object.assign(Object.assign({}, data), { _fallbackFunction: fallbackFunction })));
        });
    }
}
exports.default = SystemEvents;
