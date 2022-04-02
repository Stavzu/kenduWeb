import React, { FC } from "react";
import { UnorderedList } from "@chakra-ui/react";
import LinkItem from "./LinkItem";
import { IFooterNavigationData } from "../types";

const LinkListItems: FC<{
    data: IFooterNavigationData[];
    isLinkExternal?: boolean;
}> = ({ data, isLinkExternal }) => {
    return (
        <UnorderedList listStyleType={"none"} m="0">
            {data.map((link) => {
                return (
                    <LinkItem
                        key={link.id}
                        link={link.link}
                        isLinkExternal={isLinkExternal}
                    >
                        {link.text}
                    </LinkItem>
                );
            })}
        </UnorderedList>
    );
};

export default LinkListItems;
