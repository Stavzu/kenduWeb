import { Divider, Image, Box } from "@chakra-ui/react";
import React from "react";
import SocialIcons from "../Header/SocialIcons";
import slack from "../../../assets/images/social/slack-color.png";

const FooterSocialPart = () => {
    return (
        <>
            <Divider mt="30px" />
            <Box display="flex" justifyContent="space-between" mt="30px">
                <Image src={slack} />
                <SocialIcons type="footer" />
            </Box>
        </>
    );
};

export default FooterSocialPart;
