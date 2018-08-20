"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class EventObserverFactory {
    static createEventObserver() {
        const eventObserver = new __1.EventObserver();
        return eventObserver;
    }
}
exports.EventObserverFactory = EventObserverFactory;
