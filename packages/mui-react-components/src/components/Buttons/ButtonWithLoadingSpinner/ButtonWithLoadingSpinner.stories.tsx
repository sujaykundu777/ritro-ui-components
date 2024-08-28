import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonWithLoadingSpinner } from "./ButtonWithLoadingSpinner";
import { ButtonWithLoadingSpinnerProps } from "./ButtonWithLoadingSpinner.types";

const meta = {
  title: "Components/Buttons/ButtonWithLoadingSpinner",
  component: ButtonWithLoadingSpinner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof ButtonWithLoadingSpinner>;
export default meta;
const Template: StoryFn<ButtonWithLoadingSpinnerProps> = (args) => {
  return <ButtonWithLoadingSpinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onClick: fn(),
  children: "Click me",
  loading: false,
};
