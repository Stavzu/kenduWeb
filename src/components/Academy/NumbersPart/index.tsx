import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import NumberBlock from "../../NumberBlock";
import PageContainer from "../../PageContainer";
import { NumberBlockStyle } from "./style";

const NumberPart: FC = () => {
    return (
        <PageContainer>
            <Box {...NumberBlockStyle}>
                <NumberBlock number={8} text="lektorů" />
                <NumberBlock number={12} text="lekcí" />
                <NumberBlock number={"80+"} text="absolventů za poslední rok" />
            </Box>
        </PageContainer>
    );
};

export default NumberPart;
