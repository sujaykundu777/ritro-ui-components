import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PREFIX = "RButton";

export const classes = {
  root: `${PREFIX}-root`,
};

export const Root = styled(Button)(({ theme }) => ({
  [`&.${classes.root}`]: {
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText,
    // padding: `5px ${theme.spacing(3)} 5px ${theme.spacing(3)}`,
    borderRadius: "5px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "light",
    lineHeight: "1.5rem",
    maxHeight: "46px",
    margin: "4px",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
