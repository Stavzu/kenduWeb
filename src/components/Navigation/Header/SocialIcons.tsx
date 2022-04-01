import { HStack, Box, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import { getSocialIconsData } from "../data";

const SocialIcons: FC<{ type?: string }> = ({ type }) => {
    const isFooter = type === "footer";
    const isFooterSocialSize = isFooter ? "20px" : "16px";
    const footerSocialColor = isFooter ? "brand.grey.10" : "#999999";
    const socialData = getSocialIconsData({
        width: isFooterSocialSize,
        height: isFooterSocialSize,
        color: footerSocialColor,
    });
    return (
        <HStack
            spacing="24px"
            ml={{ lg: "80px" }}
            display={{ base: isFooter ? "flex" : "none", lg: "flex" }}
            justifyContent="center"
        >
            {socialData.map((socialIcon) => {
                return (
                    <Link
                        key={socialIcon.id}
                        href={socialIcon.link}
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
};

export default SocialIcons;
