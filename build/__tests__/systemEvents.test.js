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
const __1 = require("..");
describe('System events service', () => {
    it('Should register and execute a system event', () => __awaiter(void 0, void 0, void 0, function* () {
        let SystemEvents = yield __1.ServiceManager.get(__1.SERVICE_SYSTEM_EVENTS);
        SystemEvents.registerSystemEvent('test', (data) => __awaiter(void 0, void 0, void 0, function* () {
            expect(data.test).toBe(true);
            return true;
        }));
        yield SystemEvents.fireSystemEvent('test', { test: true });
    }));
    it('Should return false for non registered system event', () => __awaiter(void 0, void 0, void 0, function* () {
        let SystemEvents = yield __1.ServiceManager.get(__1.SERVICE_SYSTEM_EVENTS);
        expect(yield SystemEvents.fireSystemEvent('blaa', { test: true })).toBe(false);
    }));
    it('Should call the fallback function', () => __awaiter(void 0, void 0, void 0, function* () {
        let SystemEvents = yield __1.ServiceManager.get(__1.SERVICE_SYSTEM_EVENTS);
        expect(yield SystemEvents.fireSystemEvent('blaa', { test: true }, () => __awaiter(void 0, void 0, void 0, function* () { return 1; }))).toBe(1);
    }));
});
