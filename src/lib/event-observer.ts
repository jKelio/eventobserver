import { EventSubject } from "./event-subject";

export class EventObserver<T> implements EventSubject<T> {
  private observables: Array<T> = [];

  constructor() {}
  
  public subscribe(fn: T): void {
    const _observable: T = fn;
    this.observables.push(_observable);
  }

  public unsubscribe(fn: T): void {
    const _observable: T = fn;
    this.observables = this.observables.filter((observable: T) => {
      return observable !== _observable;
    });
  }

  public unsubscribeAll() {
    this.observables = [];
  }

  public emit(...args: Array<any>): Promise<any> {
    const observedValues: Array<Promise<any>> = [];
    try {
      this.observables.forEach((observable: T) => {
        const observedValue: Promise<any> = Promise.resolve(
          observable instanceof Function ? observable(...args) : observable
        );
        observedValues.push(observedValue);
      });
    } catch (error) {
      observedValues.push(Promise.reject(error));
    } finally {
      return Promise.all(observedValues);
    }
  }
}
