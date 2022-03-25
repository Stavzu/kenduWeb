import { HStack, Box, Link } from "@chakra-ui/react";
import React from "react";
import { socialIconsData } from "../data";

function SocialIcons() {
    return (
        <HStack
            spacing="24px"
            ml={{ lg: "80px" }}
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
        >
            {socialIconsData.map((socialIcon) => {
                return (
                    <Link
                        href="https://chakra-ui.com"
                        isExternal
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <Box>{socialIcon.icon}</Box>
                    </Link>
                );
            })}
        </HStack>
    );
}

export default SocialIcons;
