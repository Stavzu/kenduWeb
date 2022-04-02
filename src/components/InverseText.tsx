import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

const InverseTextStyle = {
    fontSize: "12rem",
    color: "white",
    textShadow: "-1px 0 #6E757C, 0 1px #6E757C, 1px 0 #6E757C, 0 -1px #6E757C",
    mr: {
        base: "1.2rem",
        md: "0",
    },
};

const InverseText: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Text {...InverseTextStyle}>{children}</Text>
);

export default InverseText;
