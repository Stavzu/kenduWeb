import React, { FC } from "react";
import { Text, Box } from "@chakra-ui/react";
import InverseText from "./InverseText";
import { number } from "yup";

interface INumberBlock {
    readonly number: number | string;
    readonly text: string;
}

const NumberBlock: FC<INumberBlock> = ({ number, text }) => {
    return (
        <Box
            mr={{
                md: "10.8rem",
            }}
            display={{
                base: "flex",
                md: "grid",
            }}
            alignItems="baseline"
        >
            <InverseText>{number}</InverseText>
            <Text
                color="brand.text.3"
                fontSize="2.4rem"
                lineHeight="3.2rem"
                fontWeight="800"
            >
                {text}
            </Text>
        </Box>
    );
};

export default NumberBlock;
