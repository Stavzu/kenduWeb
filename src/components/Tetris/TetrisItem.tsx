import React from "react";
import { Box } from "@chakra-ui/react";

function TetrisItem({ color, size, children }: any) {
    return (
        <Box
            bg={color}
            width={size}
            height={size}
            minW={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Box>
    );
}

export default TetrisItem;
