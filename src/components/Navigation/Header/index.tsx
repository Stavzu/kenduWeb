import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { KenduLogo } from "../../../assets/svg/kendu";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MenuLinks from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";

function Header() {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 62em)");
    const toggle = () => setIsOpenNav(!isOpenNav);
    const isMenuLinkVisible = isOpenNav || isDesktop;

    return (
        <Box
            w="100%"
            zIndex="10"
            position="fixed"
            display={{ base: "grid", lg: "flex" }}
            justifyContent={{ lg: "space-between" }}
            height={{ base: isOpenNav ? "100vh" : "64px", lg: "85px" }}
            bg={{
                base: isOpenNav ? "#D7D7D7" : "transparent",
                lg: "white",
            }}
        >
            <Box
                position="absolute"
                top="0"
                w="100%"
                alignItems="center"
                display={{ base: "block", md: "block", lg: "flex" }}
                height={{ base: isOpenNav ? "100vh" : "64px", lg: "87px" }}
                justifyContent={{ lg: "space-between" }}
                px={{ lg: "40px" }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    bg="white"
                    height={{ base: "64px", lg: "88px" }}
                    px={{ base: "24px", lg: "0px" }}
                >
                    <KenduLogo
                        height={isDesktop ? "32px" : "19px"}
                        width={isDesktop ? "120px" : "72px"}
                    />
                    <MenuToggle toggle={toggle} isOpen={isOpenNav} />
                </Box>
                {isMenuLinkVisible && <MenuLinks isOpenNav={isOpenNav} />}
            </Box>
        </Box>
    );
}

export default Header;
