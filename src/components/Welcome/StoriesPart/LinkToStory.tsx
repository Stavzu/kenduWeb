import React from "react";
import { Text } from "@chakra-ui/react";
import { ArrowRight } from "../../../assets/svg/arrow-right";
import { MainLinkStory } from "./style";

const LinkToStory = () => {
    return (
        <>
            <Text {...MainLinkStory}>Můj příběh</Text>
            <ArrowRight width="3.2rem" height="3.2rem" />
        </>
    );
};

export default LinkToStory;
