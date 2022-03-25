import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import LogoGridItem from "./LogoGridItem";
import LinksGridItem from "./LinksGridItem";
import NewsletterGridItem from "./NewsletterGridItem";
import { SwitchLayoutGroupContext } from "framer-motion";

function Footer() {
    return (
        <Box
            position="fixed"
            w="100%"
            py={{ lg: "224px" }}
            px={{ lg: "160px" }}
            bottom="0"
        >
            <Grid
                templateRows={{
                    base: "repeat(3, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "1fr",
                }}
                templateColumns={{
                    base: "1fr",
                    md: "repeat(5, 1fr)",
                }}
                gap={4}
            >
                <LogoGridItem />
                <LinksGridItem />
                <NewsletterGridItem />
            </Grid>
        </Box>
    );
}

export default Footer;
