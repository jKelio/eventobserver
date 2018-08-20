import { EventObserver } from "..";

export class EventObserverFactory {
  static createEventObserver() {
    const eventObserver = new EventObserver();
    return eventObserver;
  }
}
