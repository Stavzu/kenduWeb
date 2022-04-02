import React from "react";
import { Text, Center } from "@chakra-ui/react";

const WantMoreAboutTitle = ({ children }: any) => {
    return (
        <Center>
            <Text
                color="brand.orange.1"
                fontWeight="800"
                fontSize={{
                    base: "4rem",
                    lg: "5rem",
                    xl: "6rem",
                }}
                lineHeight={{
                    base: "4.4rem",
                    lg: "7rem",
                }}
                mb="2rem"
                textAlign="center"
            >
                {children}
            </Text>
        </Center>
    );
};

export default WantMoreAboutTitle;
