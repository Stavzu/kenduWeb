import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const ArrowDown = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 64 64" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.6662 10.665H29.3328V53.3317H34.6662V47.9984H39.9995V42.6654H45.3315V37.332H39.9982V42.665H34.6662V10.665ZM29.3322 42.665H23.9989V47.9984H29.3322V42.665ZM18.6649 37.332H23.9982V42.6654H18.6649V37.332ZM18.6662 31.998H13.3328V37.3314H18.6662V31.998ZM50.6655 31.998H45.3322V37.3314H50.6655V31.998Z"
            fill="#D5431A"
        />
    </Icon>
);
