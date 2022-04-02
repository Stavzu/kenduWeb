import React, { FC } from "react";
import { Box } from "@chakra-ui/react";

import PageContainer from "../PageContainer";
import useMediaQuery from "../../hooks/useMediaQuery";
import Tetris from "../Tetris";
import ContactInfo from "./ContactInfo";
import ContactButton from "./ContactButton";
import WantMoreAboutTitle from "./WantMoreAboutTitle";
import { topTetrisData, rightTetrisData, leftTetrisData } from "./tetrisData";

const getBoxWidth = (isDesktop: boolean) => {
    return isDesktop ? "5.4rem" : "4.2rem";
};

const WantMoreContainer: FC<{ title: string; type?: string }> = ({
    title,
    type,
}) => {
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
                    base: "120px",
                    md: "200px",
                }}
                mb={{
                    base: "10rem",
                    md: "20rem",
                    lg: "40rem",
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
                <Box display="grid" width="100%" mt="200px">
                    <WantMoreAboutTitle>{title}</WantMoreAboutTitle>
                    <ContactInfo type={type} />
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
};

export default WantMoreContainer;
