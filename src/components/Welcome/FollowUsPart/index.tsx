import React from "react";
import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { socialLinks } from "./data";
import PageContainer from "../../PageContainer";

const FollowUs = () => {
    return (
        <PageContainer>
            <Box
                mb={{
                    md: "16.8rem",
                }}
                display={{
                    base: "grid",
                    lg: "block",
                }}
                justifyContent="center"
            >
                <Text
                    fontSize={{
                        base: "2.4rem",
                        lg: "4rem",
                    }}
                    lineHeight={{
                        base: "3.2rem",
                        lg: "4.4rem",
                    }}
                    color="brand.text.1"
                    mb={{
                        base: "3.2rem",
                        lg: "6.4rem",
                    }}
                    textAlign={{
                        base: "center",
                        lg: "left",
                    }}
                    fontWeight="800"
                >
                    Sleduj nás
                </Text>
                <SimpleGrid
                    columns={{ base: 1, lg: 3 }}
                    spacing={{
                        base: "6.4rem",
                        lg: "6.4rem",
                    }}
                    height={{
                        lg: "38.4rem",
                    }}
                >
                    {socialLinks.map((socialItem) => {
                        return (
                            <Box
                                border="1px solid"
                                borderColor="brand.grey.400"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height={{
                                    base: "32.8rem",
                                    lg: "auto",
                                }}
                                width={{
                                    base: "32.8rem",
                                    lg: "auto",
                                }}
                            >
                                <Link isExternal>{socialItem.image}</Link>
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </PageContainer>
    );
};

export default FollowUs;
