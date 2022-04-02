import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { HeaderItems } from "./HeaderItems";
import SocialIcons from "./SocialIcons";
import { HeaderLinks } from "./style";

const MenuLinks: FC<{ isOpenNav: boolean }> = ({ isOpenNav }) => {
    return (
        <Box {...HeaderLinks}>
            <HeaderItems isOpenNav={isOpenNav} />
            <SocialIcons />
        </Box>
    );
};

export default MenuLinks;
