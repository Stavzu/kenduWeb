import { Text, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { gradientBackgroundStyle } from "../../styles/gradientBackground";

const priceStyle = {
    fontSize: {
        base: "8rem",
        lg: "12rem",
    },
    lineHeight: {
        base: "8.8rem",
        lg: "11.5rem",
    },
};

const currencyStyle = {
    fontSize: {
        base: "4rem",
        lg: "5rem",
    },
    lineHeight: {
        base: "4.4rem",
        lg: "5.5rem",
    },
};

const Price: FC<{ price: string }> = ({ price }) => {
    return (
        <Flex align="baseline">
            <Text {...priceStyle} {...gradientBackgroundStyle}>
                {price}
            </Text>

            <Text
                {...currencyStyle}
                fontSize={{
                    base: "4rem",
                    lg: "5rem",
                }}
                lineHeight={{
                    base: "4.4rem",
                    lg: "5.5rem",
                }}
                {...gradientBackgroundStyle}
            >
                Kč
            </Text>
        </Flex>
    );
};

export default Price;
