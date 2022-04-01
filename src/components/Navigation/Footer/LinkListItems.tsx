import React from "react";
import { UnorderedList } from "@chakra-ui/react";
import LinkItem from "./LinkItem";

const LinkListItems = ({ data, isLinkExternal }: any) => {
    return (
        <UnorderedList listStyleType={"none"} m="0">
            {data.map((link: any) => {
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
