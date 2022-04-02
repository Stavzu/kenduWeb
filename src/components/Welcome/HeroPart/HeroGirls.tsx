import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Tetris from "../../Tetris";
import { mainTetrisData } from "../tetrisData";
import useMediaQuery from "../../../hooks/useMediaQuery";

const HeroGirls = () => {
    const isDesktop = useMediaQuery("(min-width: 62em)");

    return (
        <Box
            position={{
                base: "relative",
                md: "initial",
            }}
        >
            <Box position="absolute" right="10rem" zIndex="1">
                <Image
                    src={"/images/people/sitting-girl.png"}
                    width={isDesktop ? "61.9rem" : "23.6rem"}
                    height={isDesktop ? "86.1rem" : "32.8rem"}
                />
            </Box>

            <Tetris
                data={mainTetrisData}
                columns={2}
                rows={3}
                boxWidth={isDesktop ? "22.4rem" : "8.4rem"}
                right
            />
        </Box>
    );
};

export default HeroGirls;
