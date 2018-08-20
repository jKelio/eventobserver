import { EventSubject } from "./event-subject";

export class EventObserver implements EventSubject {
  private observables: Array<Function> = [];

  constructor() {}
  
  public subscribe(fn: Function): void {
    const _observable: Function = fn;
    this.observables.push(_observable);
  }

  public unsubscribe(fn: Function): void {
    const _observable: Function = fn;
    this.observables = this.observables.filter((observable: Function) => {
      return observable !== _observable;
    });
  }

  public unsubscribeAll() {
    this.observables = [];
  }

  public emit(...args: Array<any>): Promise<any> {
    const observedValues: Array<Promise<any>> = [];
    try {
      this.observables.forEach((observable: Function) => {
        const observedValue: Promise<any> = Promise.resolve(
          observable(...args)
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
