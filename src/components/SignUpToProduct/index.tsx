import { Flex } from "@chakra-ui/react";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import MainButton from "../MainButton";
import Tetris from "../Tetris";
import { rightTetrisData, leftTetrisData } from "./tetrisData";

const SignUpToProduct = ({ buttonText }: { buttonText: string }) => {
    const isTabletOrDesktop = useMediaQuery("(min-width: 62em)");
    return (
        <Flex justifyContent="center" alignItems="center">
            {isTabletOrDesktop && (
                <Tetris
                    data={leftTetrisData}
                    columns={6}
                    rows={2}
                    boxWidth="5.2rem"
                    left
                />
            )}

            <MainButton>{buttonText}</MainButton>
            {isTabletOrDesktop && (
                <Tetris
                    data={rightTetrisData}
                    columns={6}
                    rows={2}
                    boxWidth="5.2rem"
                    right
                />
            )}
        </Flex>
    );
};

export default SignUpToProduct;
