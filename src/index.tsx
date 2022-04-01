import "./index.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./styles/theme";
import RoutesPaths from "./RoutesPaths";
import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Box>
                    <Header />
                    <RoutesPaths />
                    <Footer />
                </Box>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
