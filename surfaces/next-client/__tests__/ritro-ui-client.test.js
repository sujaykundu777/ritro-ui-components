'use strict';

const ritroUiClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(ritroUiClient(), 'Hello from ritroUiClient');
console.info('ritroUiClient tests passed');
