import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowRight } from "../../../assets/svg/arrow-right";
import PageContainer from "../../PageContainer";
import { products } from "./data";

const ProductsList = () => {
    return (
        <PageContainer>
            <Box
                mt={{
                    base: "12rem",
                    lg: "32rem",
                }}
            >
                <Text
                    fontSize={{
                        base: "1.4rem",
                        lg: "2rem",
                    }}
                    lineHeight={{
                        base: "2.8rem",
                        lg: "2rem",
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
                                    base: "2.4rem",
                                    lg: "5.6rem",
                                }}
                            >
                                <Text
                                    fontSize={{
                                        base: "4.8rem",
                                        lg: "8rem",
                                    }}
                                    lineHeight={{
                                        base: "8.8rem",
                                        lg: "5.4rem",
                                    }}
                                    color="brand.text.1"
                                >
                                    {product.title}
                                </Text>
                                <ArrowRight width="7.2rem" height="7.2rem" />
                            </Box>
                            <Divider borderColor="brand.grey.500" />
                        </Box>
                    );
                })}
            </Box>
        </PageContainer>
    );
};

export default ProductsList;
