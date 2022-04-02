import { Box } from "@chakra-ui/react";
import React from "react";
import NumberBlock from "../../NumberBlock";
import PageContainer from "../../PageContainer";

function NumberPart() {
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
                <NumberBlock number={56} text="absolventů" />
                <NumberBlock
                    number={"90%"}
                    text="absolventů si našlo práci v IT"
                />
            </Box>
        </PageContainer>
    );
}

export default NumberPart;
