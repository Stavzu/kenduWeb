import { Box } from "@chakra-ui/react";
import React from "react";
import { footerNavigationData } from "../data";
import LinkListItems from "./LinkListItems";

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
        <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            mr={{
                xl: "50px",
            }}
        >
            <LinkListItems data={pagesLinks} />
            <LinkListItems data={contactLinks} />
            <LinkListItems data={socialLinks} isLinkExternal />
            <LinkListItems data={personalLinks} />
        </Box>
    );
};

export default DesktopLinks;
