import { theme as chakraTheme } from "@chakra-ui/core";

const colors = chakraTheme.colors;

const breakpoints = ["320px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const theme = {
  ...chakraTheme,
  colors,
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Segoe UI, sans-serif",
    mono: "Menlo, monospace",
  },
  breakpoints,
  icons: {
    ...chakraTheme.icons
  }
};

export default theme;
