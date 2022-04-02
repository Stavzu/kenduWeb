import { ListItem, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { LinkItemStyle } from "./style";

interface ILinkItem {
    readonly children: React.ReactNode;
    readonly link: string;
    readonly isLinkExternal?: boolean;
}

const LinkItem: FC<ILinkItem> = ({ children, link, isLinkExternal }) => {
    const isDesktop = useMediaQuery("(min-width: 48em)");
    return (
        <ListItem {...LinkItemStyle({ isDesktop })}>
            <Link
                href={link}
                isExternal={isLinkExternal}
                _hover={{
                    textDecoration: "none",
                }}
            >
                {children}
            </Link>
        </ListItem>
    );
};

export default LinkItem;
