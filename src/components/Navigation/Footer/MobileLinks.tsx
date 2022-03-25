import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import { footerNavigationData } from "../data";

function MobileLinks() {
    const pagesLinks = footerNavigationData.filter((i) => i.section === "page");
    const contactLinks = footerNavigationData.filter(
        (i) => i.section === "contact" || i.section === "personal"
    );
    return (
        <Box display="flex">
            <UnorderedList listStyleType={"none"}>
                {pagesLinks.map((link) => {
                    return (
                        <ListItem
                            fontSize="14px"
                            lineHeight="21px"
                            fontWeight="400"
                        >
                            {link.text}
                        </ListItem>
                    );
                })}
            </UnorderedList>
            <UnorderedList listStyleType={"none"}>
                {contactLinks.map((link) => {
                    return (
                        <ListItem
                            fontSize="14px"
                            lineHeight="21px"
                            fontWeight="400"
                        >
                            {link.text}
                        </ListItem>
                    );
                })}
            </UnorderedList>
        </Box>
    );
}

export default MobileLinks;
