import { Box, Center, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { ArrowRight } from "../../../assets/svg/arrow-right";
import useMediaQuery from "../../../hooks/useMediaQuery";
import BlockTitle from "../../BlockTitle";
import { getIcon } from "../../getIcons";
import { ForWhoBlock, ForWhoDescription, ForWhoTitleStyle } from "../style";

export interface IFowWho {
    readonly id: number;
    readonly icon: string;
    readonly title: string;
    readonly description: string;
}

const ForWhoIsThis: FC<{ forWhoData: IFowWho[]; title: string }> = ({
    forWhoData,
    title,
}) => {
    const isDesktop = useMediaQuery("(min-width: 62em)");

    return (
        <Box
            display={{
                lg: "grid",
            }}
            gridTemplateColumns="50% 50%"
        >
            <Box>
                <BlockTitle mb="3.2rem" maxW="50rem">
                    {title}
                </BlockTitle>
                <Box
                    display="flex"
                    alignItems="center"
                    mb={{
                        base: "5.6rem",
                        lg: "1.8rem",
                    }}
                >
                    <Text
                        fontSize="1.6rem"
                        lineHeight="2.4rem"
                        color="brand.orange.1"
                        mr="1rem"
                    >
                        Můj příběh
                    </Text>
                    <ArrowRight />
                </Box>
            </Box>

            <Box>
                {forWhoData.map((item) => {
                    const icon = item.icon;
                    return (
                        <Box
                            key={item.id}
                            mb="48px"
                            display={{
                                base: "grid",
                                lg: "flex",
                            }}
                        >
                            <Center {...ForWhoBlock}>
                                {getIcon({
                                    icon,
                                    width: isDesktop ? "6.4rem" : "3.6rem",
                                    height: isDesktop ? "6.4rem" : "3.4rem",
                                })}
                            </Center>
                            <Box>
                                <Text {...ForWhoTitleStyle}>{item.title}</Text>
                                <Text {...ForWhoDescription}>
                                    {item.description}
                                </Text>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ForWhoIsThis;
