import React, { FC } from "react";
import { Menu, MenuButton, useDisclosure, Box } from "@chakra-ui/react";

import { IHeaderItem } from "../types";
import { getNestedLinkColor } from "./getNestedLinkColor";
import { useRouter } from "next/router";
import { SubItems } from "./SubItems";
import { MenuItem } from "./MenuItem";

export const subItemsLink = ["/mentoring", "/akademie", "/meetupy"];

const HeaderItem: FC<IHeaderItem> = ({ isSubItems, navigation, isOpenNav }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const activeUrl = router.pathname;
    const linkColor = getNestedLinkColor({
        activeUrl,
        navigation,
    });

    const hasActiveUrl = subItemsLink.includes(activeUrl);

    return (
        <Box
            bg={isOpenNav ? "brand.white" : "transparent"}
            textAlign="left"
            mr={{ md: "4.8rem" }}
            _last={{
                mr: "0",
            }}
        >
            <Menu isOpen={isOpen}>
                <MenuItem navigation={navigation} activeUrl={activeUrl}>
                    <MenuButton
                        aria-label="Options"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        color={linkColor}
                        fontSize={{ base: "3.2rem", md: "1.6rem" }}
                        p={{ base: "2.4rem", md: "0" }}
                        _hover={{
                            color: "brand.orange.1",
                        }}
                    >
                        {navigation.text}
                    </MenuButton>
                </MenuItem>

                {isSubItems && (
                    <SubItems
                        onOpen={onOpen}
                        navigation={navigation}
                        onClose={onClose}
                        hasActiveUrl={hasActiveUrl}
                    />
                )}
            </Menu>
        </Box>
    );
};

export default HeaderItem;
