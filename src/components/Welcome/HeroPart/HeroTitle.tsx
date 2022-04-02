import React from "react";
import { Text } from "@chakra-ui/react";

const HeroTitle = () => {
    return (
        <Text
            w={{
                base: "100%",
                md: "70%",
                lg: "auto",
            }}
            fontSize={{
                base: "5.6rem",
                lg: "9.6rem",
            }}
            lineHeight={{
                base: "5.6rem",
                lg: "9.2rem",
            }}
            fontWeight="900"
            color="brand.text.1"
        >
            Otevřeme ti dveře do IT světa
        </Text>
    );
};

export default HeroTitle;
