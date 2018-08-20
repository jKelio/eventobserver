# Event Observer
A simple event observer with vanilla JavaScript for the event communication of different JavaScript Layers. Maybe it is helpful for a MVC software architecture.
## Installation 
```sh
npm install mypluralize --save
```
## Usage
### Javascript
```javascript
var EventObserver = require('EventObserver');
var eventObserver = new EventObserver();
eventObserver.subscribe(() => {
    console.log('do some stuff');
});
eventObserver.emit();
```
```sh
Output should be 'do some stuff'
```
### TypeScript
```typescript
import { EventObserver } from 'EventObserver';
var eventObserver: EventObserver = new EventObserver();
eventObserver.subscribe(() => {
    console.log('do some stuff');
});
eventObserver.emit();
```
```sh
Output should be 'do some stuff'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```

# Usage for browser or any other (non CJS) environment
You can just use your favorite CJS bundler. If you have no favorite yet? Maybe you can try: [Browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/)

## Test 
```sh
npm run test
```