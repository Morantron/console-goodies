# console-goodies

Console goodies for debugging. :bug: :hammer:

`yarn add console-goodies`.

```js
import 'console-goodies';

/* or */

require('console-goodies');

/**
 * console.group|time|profile call automatically their console.whateverEnd
 * counterpart when the function finishes.
 *
 */
console.group('group therapy', () => {
  console.log('foo');
  console.log('bar');
  console.log('lol');
});
/**
 * LOG:
 *
 *   group-therapy/
 *   ├── bar
 *   ├── foo
 *   └── lol
 */

console.time(() => {
  verySlowSyncFunction();
});
// LOG: 42000.1337ms ellapsed

/**
 * You can specify a label too
 */
console.time('this is soooo slow', () => {
  verySlowFunction();
});
// LOG: "this is so slow" 42000.1337ms ellapsed

/**
 * And they also work with async stuff! Promises or promise-returning functions
 * call their console.whateverEnd counterpart when the promise is fulfiled.
 */
console.time(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000))
});
// LOG: 999.00000000002ms ellapsed

console.time('passing a promise directly', verySlowAsyncFunction());
// LOG: "passing a promise direcly" 300.00ms ellapsed

/**
 * console.tap
 *
 *   logs and returns a value: handy for peeking into stuff
 *   without having to create an intermediate variable just
 *   for debugging purposes.
 */
const f = () => 'f'
const u = () => 'u'
const c = () => 'c'
const k = () => 'k'
const fuck = () => f(u(console.tap(c(k))))
fuck();
// LOG: 'c'

/**
 * console.wtf
 *
 *   Because this is what we all do, most of the time.
 */
console.wtf();
// LOG: 'wtf'
```
