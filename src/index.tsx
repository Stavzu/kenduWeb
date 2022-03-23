import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./styles/theme";
import RoutesPaths from "./RoutesPaths";
import Container from "./components/Container";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Container>
                    <RoutesPaths />
                </Container>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
