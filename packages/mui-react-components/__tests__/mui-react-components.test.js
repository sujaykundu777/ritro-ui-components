'use strict';

const muiReactComponents = require('..');
const assert = require('assert').strict;
const DataTable = require('../src/components/DataTable/DataTable');

assert.strictEqual(muiReactComponents(), 'Hello from muiReactComponents');
console.info('muiReactComponents tests passed');

// Test case for DataTable component
const testData = [
  {
    id: '1',
    name: 'Folder 1',
    type: 'folder',
    children: [
      { id: '2', name: 'File 1-1', type: 'file' },
      { id: '3', name: 'File 1-2', type: 'file' },
    ],
  },
  {
    id: '4',
    name: 'Folder 2',
    type: 'folder',
    children: [
      { id: '5', name: 'File 2-1', type: 'file' },
      { id: '6', name: 'File 2-2', type: 'file' },
    ],
  },
];

const dataTableComponent = DataTable({ data: testData });
assert(dataTableComponent !== null, 'DataTable component should render without errors');
console.info('DataTable component test passed');
