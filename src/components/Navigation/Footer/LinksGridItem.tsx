import { GridItem } from "@chakra-ui/react";
import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const LinksGridItem: FC = () => {
    const isDesktop = useMediaQuery("(min-width: 48em)");
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, xl: 2 }}
            colSpan={{
                base: 1,
                md: 3,
                xl: 2,
            }}
        >
            {isDesktop ? <DesktopLinks /> : <MobileLinks />}
        </GridItem>
    );
};

export default LinksGridItem;
