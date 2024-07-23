import { styled } from '@mui/material/styles';
import { FormControl, Box } from '@mui/material';

const PREFIX = 'DatePicker';
export const classes = {
    container: `${PREFIX}-container`,
    component: `${PREFIX}-component`,
    label: `${PREFIX}-label`,
    error: `${PREFIX}-error`,
}

export const DatePickerContainer = styled(FormControl)(({ theme }) => ({
    [`& .${classes.container}`]: {
        margin: 0,
        width: '100%'
    }
}));

