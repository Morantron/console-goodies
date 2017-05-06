import isString from 'lodash.isstring';
import isFunction from 'lodash.isfunction';
import isUndefined from 'lodash.isundefined';
import isPromise from 'is-promise';
import flip from 'lodash.flip';

const original = {
  time: console.time,
  profile: console.profile,
  group: console.group,
  timeline: console.timeline,
};

/**
 * console.tap - logs and returns a value.
 */
console.tap = (val) => (console.log(val), val);

/**
 * console.wtf - outputs "wtf", because that what we all do most of the time.
 */
console.wtf = () => console.log('wtf');

const enhanced = (method) => {
  const report = flip((body, label) => {
    const endReport = () => {
      console[`${method}End`].apply(console, !!label ? [label] : [])
    };

    original[method].apply(console, !!label ? [label] : []);

    const result = isFunction(body) ? body() : body;

    if (isPromise(result)) {
      Promise.resolve(result)
        .then(
          endReport,
          endReport
        );
    } else {
      endReport();
    }
  })

  const dispatch = (args) => {
    if (args.length <= 1 && (isString(args[0]) || isUndefined(args[0]))) {
      return original[method];
    } else {
      return report;
    }
  }

  return (...args) => {
    dispatch(args).apply(console, args)
  }
}

'time group profile timeline'
  .split(' ')
  .filter(method => !!console[method])
  .forEach(method => console[method] = enhanced(method))

