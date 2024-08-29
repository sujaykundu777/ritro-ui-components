import { createTheme } from "@mui/material/styles";

// fix gradientTop problem
declare module "@mui/material/styles" {
  interface Palette {
    gradientTop: string;
    gradientBottom: string;
  }
  interface PaletteOptions {
    gradientTop?: string;
    gradientBottom?: string;
  }
}

// Create a theme instance.
export const RitroTheme = createTheme({
  palette: {
    gradientTop: "rgba(101, 101, 255, 1)",
    gradientBottom: "rgba(70, 70, 176, 1)",
    primary: {
      main: "#4f4fc1",
      dark: "#41419F",
    },
    secondary: {
      main: "#111111",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#111",
      secondary: "#333",
      disabled: "#666",
    },
  },
});

export default RitroTheme;
