import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { RButton } from "./Button";
import { RButtonProps } from "./Button.types";
import Add from "@mui/icons-material/Add";

const meta = {
  title: "Components/Button",
  component: RButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  argTypes: {
    variant: {
      name: "variant",
      defaultValue: "contained",
      description: "Button Variants",
      type: "string",
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    size: {
      name: "size",
      defaultValue: "medium",
      description: "Button Size",
      type: "string",
      control: "select",
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
    children: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    color: {
      name: "color",
      description: "Button color",
      type: "string",
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      defaultValue: "primary",
    },
    href: {
      control: "text",
      description: "Button href",
      defaultValue: "/",
      type: "string",
    },
    disableElevation: { control: "boolean", defaultValue: false },
    disableRipple: { control: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof RButton>;
export default meta;

const Template: StoryFn<RButtonProps> = (args) => <RButton {...args} />;

export const Primary = Template.bind({});
const props: RButtonProps = {
  size: "medium",
  onClick: fn(),
  children: "Button",
  disabled: false,
  fullWidth: false,
  variant: "contained",
  color: "primary",
  disableElevation: true,
  disableRipple: true,
  startIcon: "",
  endIcon: "",
  href: "/",
};
Primary.args = props;

export const Secondary = Template.bind({});
Secondary.args = {
  ...props,
  color: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  ...props,
  color: "error",
};

export const Info = Template.bind({});
Info.args = {
  ...props,
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  ...props,
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  ...props,
  color: "warning",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...props,
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...props,
  fullWidth: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...props,
  variant: "outlined",
};

export const Contained = Template.bind({});
Contained.args = {
  ...props,
  variant: "contained",
};

export const Text = Template.bind({});
Text.args = {
  ...props,
  variant: "text",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...props,
  startIcon: <Add />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  ...props,
  endIcon: <Add />,
};
