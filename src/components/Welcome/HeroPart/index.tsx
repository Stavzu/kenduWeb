import React from "react";
import { Box } from "@chakra-ui/react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import HeroGirls from "./HeroGirls";
import HeroScrollDown from "./HeroScrollDown";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroNewsletter from "./HeroNewsletter";
import PageContainer from "../../PageContainer";
import PageTitle from "../../PageTitle";

const HeroPart = () => {
    const isDesktop = useMediaQuery("(min-width: 62em)");

    return (
        <PageContainer>
            <Box
                position="initial"
                display={{
                    base: "initial",
                    lg: "flex",
                }}
                mt="110px"
            >
                {isDesktop ? (
                    <>
                        <Box w="48%">
                            <PageTitle>Otevřeme ti dveře do IT světa</PageTitle>
                            <HeroDescription />
                            <HeroNewsletter />
                            <HeroScrollDown />
                        </Box>
                        <HeroGirls />
                    </>
                ) : (
                    <>
                        <Box
                            display={{
                                base: "grid",
                                md: "flex",
                            }}
                        >
                            <HeroTitle />
                            <HeroGirls />
                        </Box>
                        <Box
                            mt={{
                                base: "35rem",
                                md: "20rem",
                            }}
                            p={{
                                base: "auto",
                                md: "5rem",
                                lg: "auto",
                            }}
                        >
                            <HeroDescription />
                            <HeroNewsletter />
                        </Box>
                    </>
                )}
            </Box>
        </PageContainer>
    );
};

export default HeroPart;
