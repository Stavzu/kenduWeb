import React from "react";
import {
    Box,
    Divider,
    Flex,
    Link,
    SimpleGrid,
    Text,
    HStack,
    GridItem,
    Grid,
} from "@chakra-ui/react";
import { socialLinks } from "./data";

function PartnersLogoType({ data, subtitle }: any) {
    return (
        <Box
            display="flex"
            minH="128px"
            alignItems={{
                md: "start",
                lg: "center",
            }}
        >
            <Text
                fontSize={{
                    base: "24px",
                    lg: "24px",
                }}
                lineHeight={{
                    base: "32px",
                    lg: "32px",
                }}
                fontWeight="800"
                minW="200px"
            >
                {subtitle}
            </Text>
            <Flex wrap="wrap">
                {data.map((i: any) => {
                    return (
                        <Box
                            mr="50px"
                            minH="60px"
                            display="flex"
                            alignItems="center"
                        >
                            {i.image}
                        </Box>
                    );
                })}
            </Flex>
        </Box>
    );
}

export default PartnersLogoType;
