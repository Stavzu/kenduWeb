import { Box, Text, Image } from "@chakra-ui/react";
import React, { FC } from "react";

const storyTextStyle = {
    fontFamily: "fonts.headline",
    fontSize: "20px",
    lineHeight: "34px",
    color: "brand.text.2",
    fontWeight: 400,
};

interface IWhyStory {
    readonly position: string;
    readonly name: string;
    readonly storyBottom: string;
    readonly storyTop: string;
}

const WhyStory: FC<IWhyStory> = ({ position, name, storyBottom, storyTop }) => {
    return (
        <Box
            bg="white"
            maxW="55.4rem"
            maxH="55.4rem"
            py="5.8rem"
            px="5.6rem"
            position="relative"
            mb="14rem"
        >
            <Box display="flex">
                <Image
                    src={"/images/people/jana.png"}
                    alt="jana"
                    position="absolute"
                    top="-2.8rem"
                    w="14.4rem"
                    height="14.4rem"
                />
                <Box ml="17rem">
                    <Text
                        fontFamily="fonts.headline"
                        fontSize="1.2rem"
                        lineHeight="1.8rem"
                        fontWeight="300"
                        color="brand.text.2"
                        textTransform="uppercase"
                    >
                        {position}
                    </Text>
                    <Text
                        fontSize="2.4rem"
                        lineHeight="3.1rem"
                        color="brand.text.1"
                    >
                        {name}
                    </Text>
                </Box>
            </Box>

            <Text mt="6rem" {...storyTextStyle}>
                {storyTop}
            </Text>
            <Text mt="2rem" {...storyTextStyle}>
                {storyBottom}
            </Text>
        </Box>
    );
};

export default WhyStory;
