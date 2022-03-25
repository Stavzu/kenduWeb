import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IMenuToggle } from "../types";

export const MenuToggle: FC<IMenuToggle> = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
    );
};
