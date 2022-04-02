import React, { FC } from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";
import SubItem from "./SubItem";
import { ISubItems } from "../types";

export const SubItems: FC<ISubItems> = ({
    onOpen,
    navigation,
    onClose,
    hasActiveUrl,
}) => {
    return (
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {navigation.subItems?.map((subItem) => {
                return (
                    <SubItem
                        activeLink={hasActiveUrl}
                        subItem={subItem}
                        key={subItem.id}
                    >
                        <MenuItem>{subItem.text}</MenuItem>
                    </SubItem>
                );
            })}
        </MenuList>
    );
};
