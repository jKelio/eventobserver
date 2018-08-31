export interface EventSubject<T> {
    subscribe(fn: T): void;

    unsubscribe(fn: T): void;

    unsubscribeAll(fn: T): void;

    emit(...args: Array<any>): void; //Promise<Array<any>>;
}