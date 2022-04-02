import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Linkedin = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 24 24" height={height} width={width} fill="none">
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            stroke="#999999"
            stroke-width="2"
        />
        <path
            d="M9.17391 8.08696C9.17391 8.69565 8.69565 9.17391 8.08696 9.17391C7.47826 9.17391 7 8.69565 7 8.08696C7 7.47826 7.47826 7 8.08696 7C8.69565 7 9.17391 7.47826 9.17391 8.08696ZM9.17391 10.0435H7V17H9.17391V10.0435ZM12.6522 10.0435H10.4783V17H12.6522V13.3478C12.6522 11.3043 15.2609 11.1304 15.2609 13.3478V17H17.4348V12.6087C17.4348 9.17391 13.5652 9.30435 12.6522 11V10.0435Z"
            fill="#999999"
        />
    </Icon>
);
