import React from "react";
import { Text, Center, Image } from "@chakra-ui/react";

const textStyles = {
    fontFamily: "fonts.heading",
    color: "brand.text.3",
    fontSize: "2rem",
    lineHeight: "3.4rem",
};

const ContactInfo = () => {
    return (
        <Center
            flexWrap={{
                base: "wrap",
                md: "initial",
            }}
        >
            <Text mr="1rem" {...textStyles}>
                Napiš nám na náš
            </Text>
            <Image src="/images/social/slack-color.png" />
            <Text {...textStyles} ml="1rem">
                a dozvíš se vše, co potřebuješ.
            </Text>
        </Center>
    );
};

export default ContactInfo;
