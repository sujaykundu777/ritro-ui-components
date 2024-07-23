import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PREFIX = "RButton";

export const classes = {
  root: `${PREFIX}-root`,
};

// function to style the background based on theme palette
function getBackground({ color, theme }: { color: string; theme: any }) {
  if (color === "primary") {
    return `linear-gradient(to bottom, ${theme.gradientTop} 0%, ${theme.gradientBottom} 100%)`;
  }
  return `linear-gradient(to bottom, ${theme.palette[color].main} 0%, ${theme.palette[color].dark} 100%)`;
}

export const Root = styled(Button)(({ theme, color }) => ({
  [`&.${classes.root}`]: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "light",
    transition: "0.3s",
    boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.25)",
    // textShadow: "1px 1px 2px rgba(255, 255, 255, 1)",
    lineHeight: "1.5rem",
    maxHeight: "46px",
    margin: "4px",
    background: getBackground({ color: color || "", theme }),
    padding: `5px ${theme.spacing(3)} 5px ${theme.spacing(3)}`,
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    alignContent: "stretch",
    justifyContent: "center",
    zIndex: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    flexGrow: 1,
    position: "relative",
    flexShrink: 0,
    alignSelf: "center",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    // "&:hover": {
    //   background: theme.palette.secondary.main,
    // },
  },
  [`&.MuiButton-root.MuiButton-text`]: {
    backgroundColor: theme.palette.common.white,
    "&:focus": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRadius: 0,
    },
  },
}));
