import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import TetrisItem from "../../Tetris/TetrisItem";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { PartnerType } from "../../constants";
import { ISocialLink } from "./type";

const getColor = (type: PartnerType): string => {
    if (type === PartnerType.GOLD) {
        return "brand.yellow";
    }
    if (type === PartnerType.SILVER) {
        return "brand.grey.400";
    }
    if (type === PartnerType.COMMUNITY) {
        return "brand.orange.main";
    }
    return "transparent";
};

const PartnersLogoType: FC<{
    data: ISocialLink[];
    subTitle: string;
    type: PartnerType;
}> = ({ data, subTitle, type }) => {
    const isDesktop = useMediaQuery("(min-width: 80em)");

    return (
        <Box
            display={{
                xl: "flex",
            }}
            alignItems={{
                base: "baseline",
            }}
            mt={{
                base: "4.8rem",
                xl: "4.8rem",
            }}
            mb={{
                base: "2.2rem",
                xl: "4.8rem",
            }}
        >
            <Text
                fontSize={{
                    base: "2.4rem",
                    xl: "2.4rem",
                }}
                lineHeight={{
                    base: "3.2rem",
                    xl: "3.2rem",
                }}
                fontWeight="800"
                minW={{
                    xl: "20rem",
                }}
                textAlign={{
                    base: "center",
                    xl: "start",
                }}
                mb={{
                    base: "4rem",
                    xl: "0",
                }}
                display={{
                    base: "flex",
                    xl: "unset",
                }}
                justifyContent={{
                    base: "center",
                }}
            >
                <Center
                    bg={{
                        base: getColor(type),
                        xl: "transparent",
                    }}
                    w="fit-content"
                    py="0.8rem"
                    px="1.6rem"
                    color="brand.text.1"
                >
                    {isDesktop && (
                        <TetrisItem color={getColor(type)} size="2.4rem" />
                    )}
                    <Text ml="16px">{subTitle}</Text>
                </Center>
            </Text>

            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent={{
                    base: "center",
                    xl: "start",
                }}
            >
                {data.map((i) => {
                    return (
                        <Box
                            pb={{
                                base: "2rem",
                                xl: "0",
                            }}
                            mx="3rem"
                        >
                            {i.image}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default PartnersLogoType;
