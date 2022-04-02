import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import PageContainer from "../../PageContainer";
import NumberBlock from "../../NumberBlock";

const NumberPart: FC = () => {
    return (
        <PageContainer>
            <Box
                mt="5rem"
                mb="15rem"
                display={{
                    base: "grid",
                    md: "flex",
                }}
            >
                <NumberBlock number={8} text="lektorů" />
                <NumberBlock number={12} text="partnerů" />
                <NumberBlock number={80} text="lidí v komunitě" />
            </Box>
        </PageContainer>
    );
};

export default NumberPart;
