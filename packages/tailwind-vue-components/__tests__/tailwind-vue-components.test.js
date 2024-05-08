'use strict';

const tailwindVueComponents = require('..');
const assert = require('assert').strict;

assert.strictEqual(tailwindVueComponents(), 'Hello from tailwindVueComponents');
console.info('tailwindVueComponents tests passed');
