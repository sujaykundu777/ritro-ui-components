import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";
import { useArgs } from "@storybook/preview-api";
import RDatePicker from "./DatePicker";
import { DatePickerProps } from "./DatePicker.types";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default {
  component: RDatePicker,
  title: "Components/DatePicker",
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "date" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    disableFuture: { control: "boolean" },
    disablePast: { control: "boolean" },
    format: { control: "text" },
    formatDensity: { control: "text" },
    minDate: { control: "date" },
    maxDate: { control: "date" },
    openTo: { control: "text" },
    iconComponent: { control: "object" },
    onError: { action: "error" },
    errorText: { control: "text" },
    minDateMessage: { control: "text" },
    maxDateMessage: { control: "text" },
  },
} as Meta<typeof RDatePicker>;

const Template: StoryFn<DatePickerProps> = (args) => {
  const [, updateArgs] = useArgs();
  const { value } = args;
  const [localValue, setValue] = useState<Dayjs | null>(value);

  const onChange = (date: Dayjs | null) => {
    if (date !== null) {
      setValue(date);
    }
    updateArgs({ ...args, value: date });
  };

  return <RDatePicker {...args} value={localValue} onChange={onChange} />;
};

const iconComponent = () => {
  return <CalendarMonthOutlinedIcon style={{ color: "#111" }} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Date",
  name: "date",
  value: dayjs("02-01-2024", "DD-MM-YYYY"),
  onChange: (date: Dayjs | null) => console.log(date),
  disabled: false,
  disableFuture: false,
  disablePast: false,
  format: "DD/MM/YYYY",
  formatDensity: "spacious",
  minDate: dayjs("01-01-2024", "DD-MM-YYYY"),
  maxDate: dayjs("01-12-2025", "DD-MM-YYYY"),
  openTo: "day",
  views: ["day", "month", "year"],
  iconComponent: iconComponent,
  onError: (error, value) => console.log(error, value),
  errorText: "Invalid Date",
  minDateMessage: "Date must be after the minimum date",
  maxDateMessage: "Date must be before the maximum date",
};
