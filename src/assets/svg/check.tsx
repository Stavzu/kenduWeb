import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Check = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 48 48" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.999 12H39.999V16H36.001V20H32.001V16H35.999V12ZM28 20H32V24H28V20ZM12 24H8V28H12V24ZM16.001 28H12.001V32H15.999V36H19.999V32H16.001V28ZM27.999 24H23.999V28H20.001V32H24.001V28H27.999V24Z"
            fill="#EC7357"
        />
    </Icon>
);
