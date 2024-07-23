import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormHelperText, InputLabel } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorIcon from "@mui/icons-material/Error";

import { DatePickerProps } from "./DatePicker.types";

/**
 * Renders a date picker component.
 *
 * @component DatePicker
 * @example <caption>Example usage of RDatePicker.</caption>
 * ```tsx
 * <RDatePicker
 *  label="Date"
 *  name="date"
 *  onChange={(date) => console.log(date)}
 *  disabled={false}
 *  disableFuture={false}
 *  disablePast={false}
 *  format="DD/MM/YYYY"
 *  formatDensity="spacious"
 *  minDate={dayjs("01-01-2024", "DD-MM-YYYY")}
 *  maxDate={dayjs("01-12-2024", "DD-MM-YYYY")}
 *  openTo="day"
 *  views={["day", "month", "year"]}
 *  slots={{ openPickerIcon: CalendarMonthIcon }}
 *  onError={(error, value) => console.log(error, value)}
 * />
 * ```
 */
export const RDatePicker: React.FC<DatePickerProps> = (props) => {
  const {
    iconComponent: IconComponent,
    label = "Date",
    value = dayjs("02-01-2024", "DD-MM-YYYY"),
    name = "date",
    onChange,
    disabled = false,
    disableFuture = false,
    disablePast = false,
    format = "DD/MM/YYYY",
    formatDensity = "spacious",
    minDate = dayjs("01-01-2024", "DD-MM-YYYY"),
    maxDate = dayjs("01-12-2025", "DD-MM-YYYY"),
    openTo = "day",
    views = ["day", "month", "year"],
    slots,
    onError,
    errorText = "Invalid Date",
    minDateMessage = "Date must be after the minimum date",
    maxDateMessage = "Date must be before the maximum date",
  } = props;
  const componentName = IconComponent || CalendarMonthIcon;

  const [hasError, setHasError] = React.useState(false);

  const handleError = (
    errorText: string,
    minDateMessage: string,
    maxDateMessage: string
  ) => {
    if (errorText) {
      return errorText;
    } else if (minDateMessage) {
      return minDateMessage;
    } else if (maxDateMessage) {
      return maxDateMessage;
    }
    setHasError(true);
    return "Invalid Date";
  };

  const handleChange = () => {
    setHasError(false);
  };

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          autoFocus
          inputRef={null} // Ref to the input element of the date picker
          name={name}
          value={value}
          disabled={disabled} // Disable the date picker [default: false]
          disableFuture={disableFuture} // Disable future dates [default: false]
          disablePast={disablePast} // Disable past dates [default: false]
          format={format} // Date format to display in the input field [default: "MM/DD/YYYY"]
          formatDensity={formatDensity} // dense | standard | spacious
          minDate={minDate}
          maxDate={maxDate}
          openTo={openTo}
          onOpen={() => console.log("open")}
          onClose={() => console.log("close")}
          onMonthChange={() => console.log("month change")}
          onSelectedSectionsChange={() =>
            console.log("selected sections change")
          }
          onViewChange={() => console.log("view change")}
          onYearChange={() => console.log("year change")}
          open={false}
          orientation="portrait"
          localeText={{ day: "Today", month: "Month", year: "Year" }}
          views={views}
          yearsPerRow={4}
          slots={slots || { openPickerIcon: componentName }}
          slotProps={{
            openPickerIcon: {
              onClick: () => console.log("open picker icon clicked"),
            },
          }}
          onChange={onChange} // Callback fired when the value changes
          onError={(error, value) =>
            (onError && onError(error, value)) ||
            handleError(errorText, minDateMessage, maxDateMessage)
          }
          reduceAnimations={false}
          referenceDate={dayjs()}
          renderLoading={() => <div>Loading...</div>}
          onAccept={() => handleChange()}
        />
        {hasError && (
          <FormHelperText error>
            <ErrorIcon fontSize="small" color="error" />
            {errorText}
          </FormHelperText>
        )}
      </LocalizationProvider>
    </div>
  );
};
