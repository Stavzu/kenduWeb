import { Text, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { IProductPrinceInfo } from ".";
import { Check } from "../../assets/svg/check";
import useMediaQuery from "../../hooks/useMediaQuery";

const InfoItem: FC<{ info: IProductPrinceInfo }> = ({ info }) => {
    const isDesktop = useMediaQuery("(min-width: 62em)");
    const iconSize = isDesktop ? "3.2rem" : "2.4rem";

    return (
        <Flex
            mb={{
                base: "1.2rem",
                lg: "3.8rem",
            }}
            align="center"
        >
            <Check width={iconSize} height={iconSize} />
            <Text
                ml={isDesktop ? "2.8rem" : "1.6rem"}
                fontSize="2rem"
                lineHeight="3.4rem"
                fontFamily="fonts.heading"
            >
                {info.text}
            </Text>
        </Flex>
    );
};

export default InfoItem;
