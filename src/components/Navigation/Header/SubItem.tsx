import React from "react";
import { ActiveLink } from "../../ActiveLink";
import { ISubItem } from "../types";

const SubItem = ({
    subItem,
    children,
}: {
    subItem: ISubItem;
    children: React.ReactNode;
}) => {
    return <ActiveLink to={subItem.link}>{children}</ActiveLink>;
};

export default SubItem;
