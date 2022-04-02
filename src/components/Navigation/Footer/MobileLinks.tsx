import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { LinkType } from "../../constants";
import { footerNavigationData } from "../data";
import LinkListItems from "./LinkListItems";
import { FooterLinkType } from "./type";

const getMobileLinks = ({
    link,
    secondLink,
}: {
    link: LinkType;
    secondLink?: LinkType;
}): FooterLinkType[] =>
    footerNavigationData.filter((footerData) =>
        secondLink
            ? footerData.section === link
            : footerData.section === link || footerData.section === secondLink
    );

const MobileLinks: FC = () => {
    return (
        <Box display="grid" gridTemplateColumns="1fr 1fr" mb="3.2rem">
            <LinkListItems data={getMobileLinks({ link: LinkType.PAGE })} />
            <LinkListItems
                data={getMobileLinks({
                    link: LinkType.CONTACT,
                    secondLink: LinkType.PERSONAL,
                })}
            />
        </Box>
    );
};

export default MobileLinks;
