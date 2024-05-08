'use strict';

const tailwindReactComponents = require('..');
const assert = require('assert').strict;

assert.strictEqual(tailwindReactComponents(), 'Hello from tailwindReactComponents');
console.info('tailwindReactComponents tests passed');
