import { Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ILoginProcess } from ".";

const StepItem: FC<{ step: ILoginProcess }> = ({ step }) => {
    return (
        <Box
            ml={{
                base: "2.4rem",
                lg: "4.0rem",
            }}
            maxW="55rem"
            mb={{
                base: "6rem",
                lg: "7.7rem",
            }}
        >
            <Text
                fontSize="2.4rem"
                lineHeight="3.2rem"
                fontWeight="800"
                mb={{
                    base: "0.8rem",
                    lg: "1.2rem",
                }}
            >
                {step.subtitle}
            </Text>
            <Text
                fontFamily="fonts.heading"
                fontSize="1.8rem"
                lineHeight="2.8rem"
            >
                {step.text}
            </Text>
        </Box>
    );
};

export default StepItem;
