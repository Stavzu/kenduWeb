import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

const MainButtonStyle = (small: boolean) => ({
    w: "fit-content",
    bg: "brand.black",
    color: "white",
    py: {
        base: "1.6rem",
        lg: "2.4rem",
    },
    px: "32px",
    borderRadius: {
        base: "8px",
        lg: "4px",
    },
    fontSize: {
        base: "1.6rem",
        lg: small ? "1.6rem" : "2.4rem",
    },
    lineHeight: "3.1rem",
    _hover: {
        color: "brand.grey.10",
        bg: "transparent",
        borderColor: "brand.grey.30",
        border: "1px solid",
        cursor: "pointer",
    },
});

const MainButton: FC<{ children: React.ReactNode; small: boolean }> = ({
    children,
    small = false,
}) => <Button {...MainButtonStyle(small)}>{children}</Button>;

export default MainButton;
