import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowRight } from "../../../assets/svg/arrow-right";

function AllStoriesLink() {
    return (
        <Box
            mt={{
                base: "5rem",
                lg: "12rem",
            }}
            display="flex"
            alignItems="center"
            justifyContent={{
                sm: "center",
                lg: "initial",
            }}
        >
            <Text
                fontSize={{
                    base: "3.2rem",
                    lg: "4.8rem",
                }}
                fontWeight="800"
                lineHeight="120%"
                color="brand.orange.1"
                mr="0.8rem"
            >
                Všechny příběhy
            </Text>
            <ArrowRight width="4.8rem" height="4.8rem" />
        </Box>
    );
}

export default AllStoriesLink;
