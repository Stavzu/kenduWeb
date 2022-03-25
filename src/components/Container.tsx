import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";

interface IContainer {
    readonly children: React.ReactNode;
}

const ContainerBox: FC<IContainer> = ({ children }) => {
    return (
        <>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </>
    );
};

export default ContainerBox;
