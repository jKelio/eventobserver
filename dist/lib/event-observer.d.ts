import { EventSubject } from "./event-subject";
export declare class EventObserver implements EventSubject {
    private observables;
    constructor();
    subscribe(fn: Function): void;
    unsubscribe(fn: Function): void;
    unsubscribeAll(): void;
    emit(...args: Array<any>): Promise<any>;
}
