import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataTable from './DataTable';

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
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
    { id: '7', name: 'File 3', type: 'file' },
  ],
};
