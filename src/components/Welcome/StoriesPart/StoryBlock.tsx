import React, { FC } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import LinkToStory from "./LinkToStory";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
    BlockStyle,
    ImageBlockStyle,
    LinkStyle,
    NameStyle,
    PositionStyle,
    TitleStyle,
} from "./style";

interface IStoryBlock {
    readonly position: string;
    readonly name: string;
    readonly title: string;
    readonly photo: string;
    readonly reverse: boolean;
}

const StoryBlock: FC<IStoryBlock> = ({
    position,
    name,
    title,
    photo,
    reverse,
}) => {
    const isDesktop = useMediaQuery("(min-width: 48em)");

    return (
        <Box {...BlockStyle}>
            <Box {...ImageBlockStyle}>
                <Image
                    objectFit="scale-down"
                    src={photo}
                    alt={`${photo}-name`}
                />
            </Box>
            <Box
                ml={{
                    lg: reverse ? "0" : "11.2rem",
                }}
            >
                <Text {...PositionStyle}>{position}</Text>
                <Text {...NameStyle}>{name}</Text>
                <Text {...TitleStyle}>{title}</Text>
                <Box {...LinkStyle}>
                    <LinkToStory />
                </Box>
            </Box>
        </Box>
    );
};

export default StoryBlock;
