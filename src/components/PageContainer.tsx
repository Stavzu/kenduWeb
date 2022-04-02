import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

const PageContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Container maxW="container.xl">{children}</Container>;
};

export default PageContainer;
