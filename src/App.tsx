import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRecoilValue } from "recoil";

import { darkThemeSelectedState } from "./store/DarkThemeSelectedState";
import { darkTheme, lightTheme } from "./theme";
import { AppRoutes } from "./routes";

export const App = () => {
    const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
    return (
        <ThemeProvider theme={darkThemeSelected ? darkTheme : lightTheme}>
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    );
};
