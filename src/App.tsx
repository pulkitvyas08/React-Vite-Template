import React from "react";
import { useRecoilValue } from "recoil";

import { darkThemeSelectedState } from "./store/DarkThemeSelectedState";
import { AppRoutes } from "./routes";

export const App = () => {
    const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
    return (
        <AppRoutes />
    );
};
