import React, { FC } from "react";
import { Box, Grid, Text, Container } from "@chakra-ui/react";
import LogoGridItem from "./LogoGridItem";
import LinksGridItem from "./LinksGridItem";
import NewsletterGridItem from "./NewsletterGridItem";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SocialPart from "./FooterSocialPart";
import {
    CompanyNameStyle,
    FooterContainerStyle,
    FooterGridStyle,
} from "./style";

const Footer: FC = () => {
    const isMobile = useMediaQuery("(max-width: 48em)");
    return (
        <Box {...FooterContainerStyle}>
            <Container maxW="container.xl">
                <Grid {...FooterGridStyle}>
                    <LogoGridItem />
                    <LinksGridItem />
                    <NewsletterGridItem />
                </Grid>
                <Text {...CompanyNameStyle}>© Kendu 2022</Text>
                {isMobile && <SocialPart />}
            </Container>
        </Box>
    );
};

export default Footer;
