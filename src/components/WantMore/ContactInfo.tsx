import React, { FC } from "react";
import { Text, Center } from "@chakra-ui/react";
import Image from "next/image";

interface IContactInfo {
    readonly type?: string;
}

const textStyles = {
    fontFamily: "fonts.heading",
    color: "brand.text.3",
    fontSize: "20px",
    lineHeight: "34px",
};

const ContactInfo: FC<IContactInfo> = ({ type }) => {
    if (type === "slack") {
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
                <Image
                    src="/images/social/slack-color.png"
                    layout={"responsive"}
                    width={200}
                    height={130}
                    quality={80}
                />
                <Text {...textStyles} ml="1rem">
                    a dozvíš se vše, co potřebuješ.
                </Text>
            </Center>
        );
    }
    return (
        <Center
            flexWrap={{
                base: "wrap",
                md: "initial",
            }}
        >
            <Text mr="1rem" {...textStyles}>
                Není problém. Řekni nám o něco málo o sobě a my se ti ozveme.
            </Text>
        </Center>
    );
};

export default ContactInfo;
