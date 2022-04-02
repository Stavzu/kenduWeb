import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { socialLinks } from "./data";
import PartnersLogoType from "./PartnersLogoType";

const OurPartners = () => {
    const goldPartners = socialLinks.filter((i) => i.type === "gold");
    const silverPartners = socialLinks.filter((i) => i.type === "silver");
    const communityPartners = socialLinks.filter((i) => i.type === "community");

    return (
        <Box mt="120px">
            <Text
                fontWeight="900"
                fontSize={{
                    base: "40px",
                    xl: "64px",
                }}
                lineHeight={{
                    base: "44px",
                    xl: "70px",
                }}
                mb={{
                    base: "50px",
                    xl: "64px",
                }}
                textAlign={{
                    base: "center",
                    xl: "start",
                }}
                color="brand.text.1"
            >
                Naši partneři
            </Text>
            <PartnersLogoType data={goldPartners} subtitle="Gold" type="gold" />
            <Divider my="10px" />
            <PartnersLogoType
                data={silverPartners}
                subtitle="Silver"
                type="silver"
            />
            <Divider my="10px" />
            <PartnersLogoType
                data={communityPartners}
                subtitle="Community"
                type="community"
            />
        </Box>
    );
};

export default OurPartners;
