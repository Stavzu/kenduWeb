import { GridItem } from "@chakra-ui/react";
import React from "react";
import { KenduBlack } from "../../../assets/svg/kendu-black";

const LogoGridItem = () => {
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, lg: 2 }}
            colSpan={{ base: 1, md: 2, xl: 1 }}
            mb={{
                base: "56px",
                md: "0",
            }}
        >
            <KenduBlack height="57px" width="57px" />
        </GridItem>
    );
};

export default LogoGridItem;
