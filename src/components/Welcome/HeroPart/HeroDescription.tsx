import React from "react";
import { Text } from "@chakra-ui/react";

const HeroDescription = () => {
    return (
        <Text
            mt={{
                lg: "2.4rem",
            }}
            color="brand.text.2"
            fontWeight="400"
            fontSize={{
                base: "1.6rem",
                lg: "2rem",
            }}
            lineHeight={{
                base: "2.6rem",
                lg: "3.4rem",
            }}
            fontFamily="fonts.heading"
            textAlign={{
                base: "center",
                lg: "initial",
            }}
            w={{
                lg: "70%",
                xl: "100%",
            }}
        >
            Učíme programovat, budujeme komunitu a propojujeme zájemce o
            programování s profesionály. Podporujeme, motivujeme a dodáváme
            odvahu uspět v IT světě.
        </Text>
    );
};

export default HeroDescription;
