import React from "react";
import { Box, Divider, Link, SimpleGrid, Text, HStack } from "@chakra-ui/react";
import { socialLinks } from "./data";
import PartnersLogoType from "./PartnersLogoType";

const OurPartners = () => {
    const goldPartners = socialLinks.filter((i) => i.type === "gold");
    const silverPartners = socialLinks.filter((i) => i.type === "silver");
    const communityPartners = socialLinks.filter((i) => i.type === "community");

    return (
        <>
            <Text
                fontWeight="900"
                fontSize={{
                    base: "40px",
                    lg: "64px",
                }}
                lineHeight={{
                    base: "44px",
                    lg: "70px",
                }}
                mb={{
                    base: "50px",
                    lg: "64px",
                }}
            >
                Naši partneři
            </Text>
            <PartnersLogoType data={goldPartners} subtitle="Gold" />
            <Divider my="10px" />
            <PartnersLogoType data={silverPartners} subtitle="Silver" />
            <Divider my="10px" />
            <PartnersLogoType data={communityPartners} subtitle="Community" />
        </>
    );
};

export default OurPartners;
