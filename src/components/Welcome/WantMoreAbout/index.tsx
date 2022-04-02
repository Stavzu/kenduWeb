import React from "react";
import { Box } from "@chakra-ui/react";
import { rightTetrisData, leftTetrisData, topTetrisData } from "./tetrisData";
import Tetris from "../../Tetris";
import useMediaQuery from "../../../hooks/useMediaQuery";
import ContactInfo from "./ContactInfo";
import WantMoreAboutTitle from "./WantMoreAboutTitle";
import ContactButton from "./ContactButton";
import PageContainer from "../../PageContainer";

const getBoxWidth = (isDesktop: boolean) => {
    return isDesktop ? "54px" : "42px";
};

function WantMorePart() {
    const isDesktop = useMediaQuery("(min-width: 62em)");
    const isMobile = useMediaQuery("(max-width: 48em)");
    return (
        <PageContainer>
            <Box
                display={{
                    base: "grid",
                    md: "flex",
                }}
                mt={{
                    base: "12rem",
                    md: "30rem",
                }}
            >
                {isMobile ? (
                    <Box position="relative" width="100%" bg="pink">
                        <Tetris
                            data={topTetrisData}
                            columns={11}
                            rows={3}
                            boxWidth={"3.3rem"}
                            top
                        />
                    </Box>
                ) : (
                    <Tetris
                        data={rightTetrisData}
                        columns={4}
                        rows={11}
                        boxWidth={getBoxWidth(isDesktop)}
                        left
                    />
                )}
                <Box display="grid" width="100%" mt="20rem">
                    <WantMoreAboutTitle>
                        Chceš vědět víc o Kendu?
                    </WantMoreAboutTitle>
                    <ContactInfo />
                    <ContactButton />
                </Box>
                {!isMobile && (
                    <Tetris
                        data={leftTetrisData}
                        columns={4}
                        rows={11}
                        boxWidth={getBoxWidth(isDesktop)}
                        right
                    />
                )}
            </Box>
        </PageContainer>
    );
}

export default WantMorePart;
