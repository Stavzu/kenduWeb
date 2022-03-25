import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { HeaderItems } from "./HeaderItems";
import SocialIcons from "./SocialIcons";

const MenuLinks: FC<{ isOpenNav: boolean }> = ({ isOpenNav }) => {
    return (
        <Box
            alignItems="center"
            bg="white"
            display={{ base: "grid", lg: "flex" }}
            justifyContent={{ md: "center", lg: "space-between" }}
            py={{ md: "30px", lg: "0px" }}
        >
            <HeaderItems isOpenNav={isOpenNav} />
            <SocialIcons />
        </Box>
    );
};

export default MenuLinks;
