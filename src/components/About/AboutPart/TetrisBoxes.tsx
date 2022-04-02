import React, { FC } from "react";
import Tetris from "../../Tetris";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { desktopTetrisData, mobileTetrisData } from "./tetrisData";

export const TetrisBoxes: FC = () => {
    const isDesktop = useMediaQuery("(min-width: 62em)");
    if (isDesktop) {
        <Tetris
            data={desktopTetrisData}
            columns={5}
            rows={4}
            boxWidth="100px"
            right
        />;
    }
    return (
        <Tetris
            data={mobileTetrisData}
            columns={8}
            rows={3}
            boxWidth="4.4rem"
            top
        />
    );
};
