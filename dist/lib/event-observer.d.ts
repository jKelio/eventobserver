import { EventSubject } from "./event-subject";
export declare class EventObserver<T> implements EventSubject<T> {
    private observables;
    constructor();
    subscribe(fn: T): void;
    unsubscribe(fn: T): void;
    unsubscribeAll(): void;
    emit(...args: Array<any>): Promise<any>;
}
