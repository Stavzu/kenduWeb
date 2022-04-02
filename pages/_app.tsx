import React from "react";
import App, { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "../src/styles/theme";
import "../src/index.css";

const themes = extendTheme(theme);

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
    return (
        <ChakraProvider theme={themes}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

MyApp.getInitialProps = async (context) => {
    const appProps = await App.getInitialProps(context);
    return {
        ...appProps,
        statusCode: context.ctx.res?.statusCode,
    };
};

export default MyApp;
