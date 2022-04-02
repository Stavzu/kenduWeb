import { Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ILoginProcess } from ".";
import useMediaQuery from "../../hooks/useMediaQuery";
import { gradientBackgroundStyle } from "../../styles/gradientBackground";

interface IStepNumber {
    readonly step: ILoginProcess;
    readonly isLast: boolean;
}

const StepNumber: FC<IStepNumber> = ({ step, isLast }) => {
    const isDesktop = useMediaQuery("(min-width: 48em)");
    const numberOfDots = isDesktop ? 9 : 10;
    return (
        <Box>
            <Box
                width="fit-content"
                height="fit-content"
                p="20px"
                padding="6px"
                position="relative"
                bg="brand.gradient"
            >
                <Box bg="white" py="0.8rem" px="2.4rem">
                    <Text
                        fontSize={{
                            base: "4rem",
                            lg: "5rem",
                        }}
                        lineHeight={{
                            base: "4.4rem",
                            lg: "5.5rem",
                        }}
                        w="2.6rem"
                        {...gradientBackgroundStyle}
                    >
                        {step.id}
                    </Text>
                </Box>
            </Box>
            {isLast && (
                <Box
                    display="grid"
                    justifyContent="center"
                    mt={{
                        base: "2rem",
                        lg: "1.4rem",
                    }}
                >
                    {[...Array(numberOfDots)].map((dot) => (
                        <Box
                            mb="0.8rem"
                            h="0.5rem"
                            w="0.5rem"
                            bg="brand.gradient"
                            key={dot}
                        ></Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default StepNumber;
