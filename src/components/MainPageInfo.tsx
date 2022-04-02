import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import PageTitle from "./PageTitle";
import MainButton from "./MainButton";
import useMediaQuery from "../hooks/useMediaQuery";

const DescriptionStyle = {
    fontFamily: "fonts.heading",
    w: {
        lg: "57%",
    },
    fontSize: {
        base: "1.6rem",
        lg: "2.8rem",
    },
    lineHeight: {
        base: "2.6rem",
        lg: "4.2rem",
    },
    mt: {
        base: "1.6rem",
        lg: "4rem",
    },
    color: "brand.text.2",
    mb: {
        base: "3.2rem",
        lg: "4rem",
    },
};

interface IMainPageInfo {
    readonly buttonText: string;
    readonly description: string;
    readonly title: string;
}

const MainPageInfo: FC<IMainPageInfo> = ({
    buttonText,
    description,
    title,
}) => {
    const isDesktop = useMediaQuery("(min-width: 62em)");
    return (
        <Box mt={isDesktop ? "2rem" : "20rem"}>
            <PageTitle>{title}</PageTitle>
            <Text {...DescriptionStyle}>{description}</Text>
            <MainButton small>{buttonText}</MainButton>
        </Box>
    );
};

export default MainPageInfo;
