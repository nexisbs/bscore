import { ServiceManager, SERVICE_SYSTEM_EVENTS } from "..";


describe('System events service', () => {
    it('Should register and execute a system event', async () => {

        let SystemEvents = await ServiceManager.get<SERVICE_SYSTEM_EVENTS>(SERVICE_SYSTEM_EVENTS);

        SystemEvents.registerSystemEvent('test', async (data) => {

            expect(data.test).toBe(true);

            return true;
        });

        await SystemEvents.fireSystemEvent('test', {test: true});

    })

    it('Should return false for non registered system event', async () => {

        let SystemEvents = await ServiceManager.get<SERVICE_SYSTEM_EVENTS>(SERVICE_SYSTEM_EVENTS);

        expect(await SystemEvents.fireSystemEvent('blaa', {test: true})).toBe(false);

    })

    it('Should call the fallback function', async () => {

        let SystemEvents = await ServiceManager.get<SERVICE_SYSTEM_EVENTS>(SERVICE_SYSTEM_EVENTS);

        expect(await SystemEvents.fireSystemEvent('blaa', {test: true}, async () => { return 1 })).toBe(1);

    })
});