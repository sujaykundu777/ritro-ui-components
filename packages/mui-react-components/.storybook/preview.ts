// /** @type { import('@storybook/react').Preview } */
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { Preview } from "@storybook/react";
import { RitroTheme } from "../src/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      ritro: RitroTheme,
    },
    defaultTheme: "ritro",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const globalTypes: Preview["globalTypes"] = {
  theme: {
    name: "Themes",
    description: "Themes for the components",
    defaultValue: "ritro",
    toolbar: {
      icon: "paintbrush",
      items: ["ritro", "light", "dark"],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
