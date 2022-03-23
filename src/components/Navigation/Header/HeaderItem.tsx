import React, { FC } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SubItem from "./SubItem";

interface IHeaderItem {
    readonly isSubItems: boolean;
    readonly navigation: any;
}

const getLinkColor = ({ locationPath, navigation }: any): string => {
    const specificLink = ["/mentoring", "/akademie", "/meetupy"];
    const isLinkFromSubItem =
        specificLink.includes(locationPath) && navigation.id === 2;

    if (isLinkFromSubItem) {
        return "brand.orange.1";
    }
    if (locationPath === navigation.link) {
        return "brand.orange.1";
    }
    return "text.2";
};

const HeaderItem: FC<IHeaderItem> = ({ isSubItems, navigation }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const location = useLocation();
    const locationPath = location.pathname;
    const linkColor = getLinkColor({ locationPath, navigation });

    return (
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
                    _hover={{
                        color: "brand.orange.1",
                    }}
                    color={linkColor}
                >
                    {navigation.text}
                </MenuButton>
            </Link>

            {isSubItems && (
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                    {navigation.subItems?.map((subItem: any) => {
                        return (
                            <SubItem subItem={subItem}>
                                <MenuItem>{subItem.text}</MenuItem>
                            </SubItem>
                        );
                    })}
                </MenuList>
            )}
        </Menu>
    );
};

export default HeaderItem;
