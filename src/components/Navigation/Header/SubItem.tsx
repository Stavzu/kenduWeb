import React from "react";
import { ActiveLink } from "../../ActiveLink";
import { ISubItem } from "../types";

const SubItem = ({
    subItem,
    children,
    activeLink,
}: {
    subItem: ISubItem;
    children: React.ReactNode;
    activeLink: boolean;
}) => {
    return (
        <ActiveLink activeLink={activeLink} href={subItem.link}>
            {children}
        </ActiveLink>
    );
};

export default SubItem;
