import React from "react";
import { background, Box, Center, Text } from "@chakra-ui/react";

const getColor = (type: any): string => {
    if (type === "gold") {
        return "brand.yellow";
    }
    if (type === "silver") {
        return "brand.grey.400";
    }
    if (type === "community") {
        return "brand.orange.main";
    }
    return "transparent";
};

function PartnersLogoType({ data, subtitle, type }: any) {
    console.log(type, "type");
    return (
        <Box
            display={{
                xl: "flex",
            }}
            alignItems={{
                base: "baseline",
            }}
            mt={{
                base: "48px",
                xl: "48px",
            }}
            mb={{
                base: "22px",
                xl: "48px",
            }}
        >
            <Text
                fontSize={{
                    base: "24px",
                    xl: "24px",
                }}
                lineHeight={{
                    base: "32px",
                    xl: "32px",
                }}
                fontWeight="800"
                minW={{
                    xl: "200px",
                }}
                textAlign={{
                    base: "center",
                    xl: "start",
                }}
                mb={{
                    base: "40px",
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
                    py="8px"
                    px="16px"
                    color="brand.text.1"
                >
                    {subtitle}
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
                {data.map((i: any) => {
                    return (
                        <Box
                            pb={{
                                base: "20px",
                                xl: "0",
                            }}
                            mx="30px"
                        >
                            {i.image}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default PartnersLogoType;
