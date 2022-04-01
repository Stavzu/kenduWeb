import React from "react";
import { Box, Grid, Text, Container } from "@chakra-ui/react";
import LogoGridItem from "./LogoGridItem";
import LinksGridItem from "./LinksGridItem";
import NewsletterGridItem from "./NewsletterGridItem";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SocialPart from "./FooterSocialPart";

const Footer = () => {
    const isMobile = useMediaQuery("(max-width: 48em)");
    return (
        <Box
            my={{
                base: "40px",
                md: "100px",
                xl: "224px",
            }}
        >
            <Container maxW="container.xl">
                <Grid
                    templateRows={{
                        base: "auto auto auto",
                        md: "repeat(2, 1fr)",
                        xl: "1fr",
                    }}
                    templateColumns={{
                        base: "1fr",
                        lg: "repeat(5, 1fr)",
                    }}
                >
                    <LogoGridItem />
                    <LinksGridItem />
                    <NewsletterGridItem />
                </Grid>
                <Text
                    fontSize="xs"
                    color="brand.text.3"
                    mt={{
                        md: "20px",
                        lg: "46px",
                    }}
                    display={{
                        base: "none",
                        md: "flex",
                    }}
                >
                    © Kendu 2022
                </Text>
                {isMobile && <SocialPart />}
            </Container>
        </Box>
    );
};

export default Footer;
