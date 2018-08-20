import { EventObserver } from "../../src";
import { expect } from "chai";

describe('EventObserver', () => {
    it('should be creatable', () => {
        const eventObserver = new EventObserver();
        expect(eventObserver).is.instanceof(EventObserver);
    });
});
