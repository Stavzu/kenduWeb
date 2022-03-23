import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Trophy = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 64 64" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 8H47.9974H42.6641H21.3333H16V13.3333L10.6654 13.3333H5.33203V18.6667V40H10.6641V40.0003H15.9974V34.667H10.6654V18.6667H16V40V45.3333H48V40.0003H53.3333V40H58.6654V13.3333H58.6641V13.3333H48V8ZM48 40V34.667H53.332V18.6666H47.9974V40H48ZM42.6641 40V18.6666V13.3333H21.3333V40H42.6641ZM29.332 45.3335H34.6654V50.6665H42.6654V55.9998H34.6654V56.0002H29.332V55.9998H21.332V50.6665H29.332V45.3335Z"
            fill="#D5431A"
        />
    </Icon>
);
