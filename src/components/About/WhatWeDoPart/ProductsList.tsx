import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowRight } from "../../../assets/svg/arrow-right";
import { products } from "./data";

const ProductsList = () => {
    return (
        <div>
            <Text
                fontSize={{
                    base: "14px",
                    lg: "20px",
                }}
                lineHeight={{
                    base: "28px",
                    lg: "20px",
                }}
                fontWeight="300"
                textTransform="uppercase"
            >
                Co děláme?
            </Text>
            {products.map((product) => {
                return (
                    <Box key={product.id}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            my={{
                                base: "24px",
                                lg: "56px",
                            }}
                        >
                            <Text
                                fontSize={{
                                    base: "48px",
                                    lg: "80px",
                                }}
                                lineHeight={{
                                    base: "88px",
                                    lg: "54px",
                                }}
                                color="brand.text.1"
                            >
                                {product.title}
                            </Text>
                            <ArrowRight width="72px" height="72px" />
                        </Box>
                        <Divider borderColor="brand.grey.500" />
                    </Box>
                );
            })}
        </div>
    );
};

export default ProductsList;
