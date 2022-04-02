import { GridItem } from "@chakra-ui/react";
import React, { FC } from "react";
import { KenduBlack } from "../../../assets/svg/kendu-black";

const LogoGridItem: FC = () => {
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, lg: 2 }}
            colSpan={{ base: 1, md: 2, xl: 1 }}
            mb={{
                base: "5.6rem",
                md: "0",
            }}
        >
            <KenduBlack height="5.7rem" width="5.7rem" />
        </GridItem>
    );
};

export default LogoGridItem;
