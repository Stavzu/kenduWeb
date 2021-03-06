import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Chat = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 64 64" height={height} width={width}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.332 5.33325H10.6654H5.33204H5.33203V10.6666H5.33204V58.6666H10.6654V10.6666H53.332V42.6665H15.9987V47.9998H53.332V47.9999H58.6654V47.9998V42.6665V10.6666V5.33325H53.332ZM10.666 48H15.9994V53.3333H10.666V48Z"
            fill="#D5431A"
        />
    </Icon>
);
