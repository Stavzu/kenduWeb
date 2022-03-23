import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Mail = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 24 24" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 4H2V20H22V4ZM4 18V6H20V18H4ZM8 8H6V10H8V12H10V14H14V12H16V10H18V8H16V10H14V12H10V10H8V8Z"
            fill="#999999"
        />
    </Icon>
);
