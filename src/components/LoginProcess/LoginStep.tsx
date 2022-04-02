import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { ILoginProcess } from ".";
import StepItem from "./StepItem";

import StepNumber from "./StepNumber";

const LoginStep: FC<{ step: ILoginProcess; stepLength: number }> = ({
    step,
    stepLength,
}) => {
    const isLast = step.id !== stepLength;
    return (
        <Flex justifyContent="center">
            <StepNumber isLast={isLast} step={step} />
            <StepItem step={step} />
        </Flex>
    );
};

export default LoginStep;
