import React from "react";
import { Box, Divider, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { socialLinks } from "./data";

function FollowUs() {
    return (
        <Box
            display={{
                base: "grid",
                lg: "unset",
            }}
            justifyContent="center"
        >
            <Text
                fontSize={{
                    base: "24px",
                    lg: "40px",
                }}
                lineHeight={{
                    base: "32px",
                    lg: "44px",
                }}
                color="brand.text.1"
                mb={{
                    base: "32px",
                    lg: "64px",
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
                    base: "64px",
                    lg: "64px",
                }}
                height={{
                    lg: "384px",
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
                                base: "328px",
                                lg: "auto",
                            }}
                            width={{
                                base: "328px",
                                lg: "auto",
                            }}
                        >
                            <Link isExternal>{socialItem.image}</Link>
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

export default FollowUs;
