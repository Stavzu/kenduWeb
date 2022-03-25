import React, { FC } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Link,
    Box,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SubItem from "./SubItem";
import { IHeaderItem } from "../types";
import { getNestedLinkColor } from "./getNestedLinkColor";

const HeaderItem: FC<IHeaderItem> = ({ isSubItems, navigation, isOpenNav }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const location = useLocation();
    const locationPath = location.pathname;
    const linkColor = getNestedLinkColor({ locationPath, navigation });

    return (
        <Box
            bg={isOpenNav ? "brand.white" : "transparent"}
            textAlign="left"
            mr={{ md: "48px" }}
            _last={{
                mr: "0px",
            }}
        >
            <Menu isOpen={isOpen}>
                <Link
                    href={navigation.link}
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <MenuButton
                        aria-label="Options"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        color={linkColor}
                        fontSize={{ base: "32px", md: "16px" }}
                        p={{ base: "24px", md: "0px" }}
                        _hover={{
                            color: "brand.orange.1",
                        }}
                    >
                        {navigation.text}
                    </MenuButton>
                </Link>

                {isSubItems && (
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                        {navigation.subItems?.map((subItem) => {
                            return (
                                <SubItem subItem={subItem}>
                                    <MenuItem>{subItem.text}</MenuItem>
                                </SubItem>
                            );
                        })}
                    </MenuList>
                )}
            </Menu>
        </Box>
    );
};

export default HeaderItem;
