import { HStack, Box, Link } from "@chakra-ui/react";
import React from "react";
import { socialIconsData } from "../data";

function SocialIcons() {
    return (
        <HStack spacing="24px" ml="80px">
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
