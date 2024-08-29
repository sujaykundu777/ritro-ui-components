import { DateValidationError } from "@mui/x-date-pickers"
import { Dayjs } from "dayjs"

export interface DatePickerProps {
    label: string
    value: Dayjs | null
    name: string
    onChange: (date: Dayjs | null) => void
    iconComponent?: React.ElementType
    disabled?: boolean
    disableFuture?: boolean
    disablePast?: boolean
    format?: string
    formatDensity?: "dense" | "spacious"
    minDate?: Dayjs
    maxDate?: Dayjs
    openTo?: "day" | "month" | "year"
    views?: Array<"day" | "month" | "year">
    slots?: {
        openPickerIcon: React.ElementType
    }
    onError?: (error: DateValidationError, value: Dayjs | null) => void | undefined
    errorText?: string
    minDateMessage?: string
    maxDateMessage?: string
}