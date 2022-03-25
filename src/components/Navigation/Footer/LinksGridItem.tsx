import { GridItem, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { footerNavigationData } from "../data";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const LinksGridItem = () => {
    const isDesktop = useMediaQuery("(min-width: 48em)");
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, lg: 2 }}
            colSpan={{
                base: 1,
                md: 4,
                lg: 2,
            }}
        >
            {isDesktop ? <DesktopLinks /> : <MobileLinks />}
        </GridItem>
    );
};

export default LinksGridItem;
