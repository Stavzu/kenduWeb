import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { navigationData } from "../data";
import HeaderItem from "./HeaderItem";

export const HeaderItems: FC<{ isOpenNav: boolean }> = ({ isOpenNav }) => {
    return (
        <Box textAlign="center" w="100%" display={{ base: "grid", md: "flex" }}>
            {navigationData.map((navigation) => {
                const isSubItems = Array.isArray(navigation.subItems);
                return (
                    <HeaderItem
                        isSubItems={isSubItems}
                        navigation={navigation}
                        key={navigation.id}
                        isOpenNav={isOpenNav}
                    />
                );
            })}
        </Box>
    );
};
