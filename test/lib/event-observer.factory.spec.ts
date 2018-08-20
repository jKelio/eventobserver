import { EventObserver, EventObserverFactory } from "../../src";
import { expect } from "chai";

describe('EventObserverFactory', () => {
    it('should can create an instance of EventObserver', () => {
        const eventObserver = EventObserverFactory.createEventObserver();
        expect(eventObserver).is.instanceof(EventObserver);
    });
});
