import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const ChevronDown = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 24 24" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 8H5V10H7V12H9V14H11V16H13V14H15V12H17V10H19V8H17V10H15V12H13V14H11V12H9V10H7V8Z"
            fill="#41454E"
        />
    </Icon>
);
