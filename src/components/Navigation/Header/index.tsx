import React, { useState, FC } from "react";
import { Box } from "@chakra-ui/react";
import { KenduLogo } from "../../../assets/svg/kendu";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MenuLinks from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";
import { HeaderStyle, HeaderBoxStyle, HeaderLineStyle } from "./style";

const Header: FC = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 62em)");
    const toggle = () => setIsOpenNav(!isOpenNav);
    const isMenuLinkVisible = isOpenNav || isDesktop;

    return (
        <Box {...HeaderStyle(isOpenNav)}>
            <Box {...HeaderBoxStyle(isOpenNav)}>
                <Box {...HeaderLineStyle}>
                    <KenduLogo
                        height={isDesktop ? "3.2rem" : "1.9rem"}
                        width={isDesktop ? "12rem" : "7.2rem"}
                    />
                    <MenuToggle toggle={toggle} isOpen={isOpenNav} />
                </Box>
                {isMenuLinkVisible && <MenuLinks isOpenNav={isOpenNav} />}
            </Box>
        </Box>
    );
};

export default Header;
