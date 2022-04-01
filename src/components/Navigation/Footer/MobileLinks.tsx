import { Box } from "@chakra-ui/react";
import React from "react";
import { footerNavigationData } from "../data";
import LinkListItems from "./LinkListItems";

function MobileLinks() {
    const pagesLinks = footerNavigationData.filter((i) => i.section === "page");
    const contactLinks = footerNavigationData.filter(
        (i) => i.section === "contact" || i.section === "personal"
    );
    return (
        <Box display="grid" gridTemplateColumns="1fr 1fr" mb="32px">
            <LinkListItems data={pagesLinks} />
            <LinkListItems data={contactLinks} />
        </Box>
    );
}

export default MobileLinks;
