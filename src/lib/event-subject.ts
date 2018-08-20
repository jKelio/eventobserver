export interface EventSubject {
    subscribe(fn: Function): void;

    unsubscribe(fn: Function): void;

    unsubscribeAll(fn: Function): void;

    emit(...args: Array<any>): void; //Promise<Array<any>>;
}