"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventObserver {
    constructor() {
        this.observables = [];
    }
    subscribe(fn) {
        const _observable = fn;
        this.observables.push(_observable);
    }
    unsubscribe(fn) {
        const _observable = fn;
        this.observables = this.observables.filter((observable) => {
            return observable !== _observable;
        });
    }
    unsubscribeAll() {
        this.observables = [];
    }
    emit(...args) {
        const observedValues = [];
        try {
            this.observables.forEach((observable) => {
                const observedValue = Promise.resolve(observable(...args));
                observedValues.push(observedValue);
            });
        }
        catch (error) {
            observedValues.push(Promise.reject(error));
        }
        finally {
            return Promise.all(observedValues);
        }
    }
}
exports.EventObserver = EventObserver;
