import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

const TitleStyle = {
    w: {
        base: "100%",
        md: "70%",
        lg: "auto",
    },
    fontSize: {
        base: "5.6rem",
        lg: "9.6rem",
    },
    lineHeight: {
        base: "5.6rem",
        lg: "9.2rem",
    },
    fontWeight: "900",
    color: "brand.text.1",
};

const PageTitle: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Text {...TitleStyle}>{children}</Text>;
};

export default PageTitle;
