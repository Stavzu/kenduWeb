import { Box } from "@chakra-ui/react";
import React from "react";
import { KenduLogo } from "../../../assets/svg/kendu";
import { HeaderItems } from "./HeaderItems";
import SocialIcons from "./SocialIcons";

function Header() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            h="88px"
            alignItems="center"
            px="40px"
            bg="brand.white"
        >
            <KenduLogo height="32px" width="120px" />
            <Box display="flex" alignItems="center">
                <HeaderItems />
                <SocialIcons />
            </Box>
        </Box>
    );
}

export default Header;
