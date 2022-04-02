import { Divider, Box, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import SocialIcons from "../Header/SocialIcons";

const FooterSocialPart: FC = () => {
    return (
        <>
            <Divider mt="3rem" />
            <Box display="flex" justifyContent="space-between" mt="3rem">
                <Image src="/images/social/slack-color.png" />
                <SocialIcons type="footer" />
            </Box>
        </>
    );
};

export default FooterSocialPart;
