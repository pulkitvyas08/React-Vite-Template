import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#191919",
            paper: "#242424",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#FFFFFF",
        },
    },
});
