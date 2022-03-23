import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { navigationData } from "../data";
import HeaderItem from "./HeaderItem";

export const HeaderItems = () => {
    return (
        <Box display="flex">
            <HStack spacing="48px">
                {navigationData.map((navigation) => {
                    const isSubItems = Array.isArray(navigation.subItems);
                    return (
                        <HeaderItem
                            isSubItems={isSubItems}
                            navigation={navigation}
                            key={navigation.id}
                        />
                    );
                })}
            </HStack>
        </Box>
    );
};
