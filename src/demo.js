require('../src/index.js');

console.log('Welcome to console goodies!');

const verySlowSyncFunction = () => {
  let result;

  for(let i = 0; i < 100000000; i++) {
    result += Math.random();
  }

  return result;
}

const verySlowAsyncFunction = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000))
}

// console.wtf
console.wtf();

// console.tap
const f = () => 'f'
const u = () => 'u'
const c = () => 'c'
const k = () => 'k'
const fuck = () => f(u(console.tap(c(k))))
fuck();

// console.group
console.group('group therapy', () => {
  console.log('foo');
  console.log('bar');
  console.log('lol');
});

// console.time
console.time(() => {
  verySlowSyncFunction();
});

console.time('very slow sync function', () => {
  verySlowSyncFunction();
});

console.time('very slow async function returning a promise', () => {
  return verySlowAsyncFunction();
});

console.time('passing a promise directly', verySlowAsyncFunction());

console.profile(() => verySlowSyncFunction());
