import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    secondary: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Secondary Button',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
};
