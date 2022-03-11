import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';
import { App } from "./App";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <App />
            </ ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
