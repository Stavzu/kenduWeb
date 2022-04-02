import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { getIcon } from "../../getIcons";

interface IContentCard {
    readonly icon: React.ReactNode;
    readonly title: string;
    readonly description: string;
}

const ContenCard: FC<IContentCard> = ({ icon, title, description }) => {
    const isDesktop = useMediaQuery("(min-width: 62em)");

    return (
        <Box
            border="1px solid #E5E5E5"
            py={{
                base: "26px",
                md: "66px",
            }}
            px="32px"
        >
            {getIcon({
                icon,
                width: isDesktop ? "6.4re," : "3.6rem",
                height: isDesktop ? "6.4rem" : "3.4rem",
            })}
            <Text
                mt={{
                    base: "4.2rem",
                    lg: "6rem",
                }}
                color="brand.text.1"
                fontSize="3.2rem"
                lineHeight="3.8rem"
                fontWeight="800"
            >
                {title}
            </Text>
            <Text
                fontFamily="brand.heading"
                fontSize={{
                    base: "1.6rem",
                    lg: "1.8rem",
                }}
                lineHeight={{
                    base: "2.6rem",
                    lg: "2.8rem",
                }}
                color="brand.text.2"
            >
                {description}
            </Text>
        </Box>
    );
};

export default ContenCard;
