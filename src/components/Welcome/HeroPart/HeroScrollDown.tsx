import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowDown } from "../../../assets/svg/arrow-down";

const HeroScrollDown = () => {
    return (
        <Box display="flex" alignItems="center" mt="13.8rem">
            <ArrowDown width="6.4rem" height="6.4rem" />
            <Text
                fontSize="2rem"
                lineHeight="3.4rem"
                ml="3rem"
                fontFamily="fonts.heading"
                color="brand.text.3"
            >
                Zaskroluj si
            </Text>
        </Box>
    );
};

export default HeroScrollDown;
