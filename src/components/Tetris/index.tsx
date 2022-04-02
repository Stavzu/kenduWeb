import { Box, Center } from "@chakra-ui/react";
import React, { FC } from "react";

export interface ITetrisData {
    readonly id: number;
    readonly content?: string | React.ReactNode;
    readonly color: string;
}

interface ITetris {
    readonly columns: number;
    readonly rows: number;
    readonly boxWidth: string;
    readonly data: ITetrisData[];
    readonly right?: boolean;
    readonly left?: boolean;
    readonly top?: boolean;
}

const Tetris: FC<ITetris> = ({
    columns,
    rows,
    boxWidth,
    data,
    right,
    left,
    top,
}) => {
    return (
        <Box
            position="absolute"
            right={right ? "0" : "undefined"}
            left={left || top ? "0" : "undefined"}
            display="grid"
            gridTemplateColumns={`repeat(${columns}, 1fr)`}
            gridTemplateRows={`repeat(${rows}, 1fr)`}
            gridAutoFlow="column"
            w={top ? "100%" : "fit-content"}
        >
            {data.map((item) => (
                <Center
                    key={item.id}
                    h={`${boxWidth}`}
                    w={`${boxWidth}`}
                    bg={item.color}
                >
                    {item.content ?? ""}
                </Center>
            ))}
        </Box>
    );
};

export default Tetris;
