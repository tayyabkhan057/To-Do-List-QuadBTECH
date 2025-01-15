import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#fff" },
    background: { default: "#f5f5f5", paper: "#fff" },
    text: { primary: "#000", secondary: "#555" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#4caf50" },
    background: { default: "#262525", paper: "#121212" },
    text: { primary: "#fff", secondary: "#aaa" },
  },
});
