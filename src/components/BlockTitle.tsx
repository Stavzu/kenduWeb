import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

const BlockStyle = ({ mb, maxW }: { mb?: string; maxW?: string }) => ({
    fontSize: {
        base: "4rem",
        lg: "6.4rem",
    },
    fontWeight: "900",
    lineHeight: {
        base: "4.4rem",
        lg: "7rem",
    },
    mb: mb ?? "10rem",
    color: "brand.text.1",
    maxW: maxW ?? "undefined",
});

const BlockTitle: FC<{
    children: React.ReactNode;
    mb?: string;
    maxW?: string;
}> = ({ children, mb, maxW }) => {
    return <Text {...BlockStyle({ mb, maxW })}>{children}</Text>;
};

export default BlockTitle;
