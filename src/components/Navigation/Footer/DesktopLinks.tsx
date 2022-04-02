import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { LinkType } from "../../constants";
import { footerNavigationData } from "../data";
import LinkListItems from "./LinkListItems";
import { FooterLinkType } from "./type";

const getPageLinks = (type: LinkType): FooterLinkType[] =>
    footerNavigationData.filter((footerData) => footerData.section === type);

const DesktopLinks: FC = () => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            mr={{
                xl: "5rem",
            }}
        >
            <LinkListItems data={getPageLinks(LinkType.PAGE)} />
            <LinkListItems data={getPageLinks(LinkType.CONTACT)} />
            <LinkListItems
                data={getPageLinks(LinkType.SOCIAL)}
                isLinkExternal
            />
            <LinkListItems data={getPageLinks(LinkType.PERSONAL)} />
        </Box>
    );
};

export default DesktopLinks;
