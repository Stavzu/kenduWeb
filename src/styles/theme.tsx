import { extendTheme, theme as base } from "@chakra-ui/react";

const colors = {
    brand: {
        white: "#ffffff",
        yellow: "#FFB81E",
        black: "#101119",
        hoverBlack: "#272727",
        silver: "#D4D4D4",
        gradient: "linear-gradient(180deg, #FFB81E 0%, #EC7357 100.05%)",
        grey: {
            10: "#0D0D0D",
            30: "#333333",
            300: "#999999",
            400: "#D4D4D4",
            500: "#E5E5E5",
            700: "#F5F5F5",
        },
        orange: {
            main: "#EC7357",
            1: "#D5431A",
        },
        text: {
            2: "#41454E",
            3: "#6E757C",
        },
    },
};

const fonts = {
    heading: `Lineca-Bold`,
    body: `Lineca-Medium`,
    fonts: {
        //heading: `Linecaa, ${base.fonts?.heading}`,
        // body: `Lineca-Bold,${base.fonts?.body}`,
    },
};

export const theme = extendTheme({ colors, fonts });
