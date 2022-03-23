import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const KenduBlack = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 48 48" height={height} width={width}>
        <rect width="48" height="48" fill="#101119" />
        <rect
            x="27.1426"
            y="18.8125"
            width="5.31465"
            height="5.31465"
            fill="white"
        />
        <rect
            x="27.1426"
            y="29.4414"
            width="5.31465"
            height="5.31465"
            fill="white"
        />
        <rect
            x="21.8281"
            y="24.127"
            width="5.31465"
            height="5.31465"
            fill="white"
        />
        <rect
            x="16.5605"
            y="11.7598"
            width="5.31465"
            height="22.9961"
            fill="white"
        />
    </Icon>
);
