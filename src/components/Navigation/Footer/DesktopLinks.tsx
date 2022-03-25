import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import { footerNavigationData } from "../data";

const DesktopLinks = () => {
    const pagesLinks = footerNavigationData.filter((i) => i.section === "page");
    const contactLinks = footerNavigationData.filter(
        (i) => i.section === "contact"
    );
    const socialLinks = footerNavigationData.filter(
        (i) => i.section === "social"
    );
    const personalLinks = footerNavigationData.filter(
        (i) => i.section === "personal"
    );
    return (
        <Box display="grid" gridTemplateColumns={"repeat(4, 1fr)"}>
            <UnorderedList listStyleType={"none"} m="0">
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
            <UnorderedList listStyleType={"none"} m="0">
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
            <UnorderedList listStyleType={"none"} m="0">
                {socialLinks.map((link) => {
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
            <UnorderedList listStyleType={"none"} m="0">
                {personalLinks.map((link) => {
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
};

export default DesktopLinks;
