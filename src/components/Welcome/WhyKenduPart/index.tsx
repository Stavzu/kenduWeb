import { Box, SimpleGrid, Container } from "@chakra-ui/react";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import BlockTitle from "../../BlockTitle";
//import PageContainer from "../../PageContainer";
import WhyStory from "./WhyStory";

const WhyKenduPart = () => {
    const isDesktop = useMediaQuery("(min-width: 62em)");
    return (
        <Box my="22.4rem" bg="brand.grey.700" pt="22.4rem">
            <>
                {isDesktop && (
                    <SimpleGrid columns={2}>
                        <Box>
                            <BlockTitle mb="280px">Proč Kendu?</BlockTitle>
                            <WhyStory
                                position=" Junior React Developer"
                                name="Michaela Rudolfová"
                                storyTop="Kdybych to nezažila, nevěřila bych. Může v pracovní sféře
                existovat přátelská a vlídná komunitam, která mi ochotně pomůže
                ze slepé uličky?"
                                storyBottom="Mentoring mi přinesl úlevu od skličujícího množství informací,
                které při samostudiu vyplynou. Praktické rady a moderní pojetí
                webdesignu mě posunulo o obrovský kus dál!"
                            />
                        </Box>
                        <Box>
                            <WhyStory
                                position=" Junior React Developer"
                                name="Petra Krasinská"
                                storyTop="Kdybych to nezažila, nevěřila bych. Může v pracovní sféře
                existovat přátelská a vlídná komunitam, která mi ochotně pomůže
                ze slepé uličky?"
                                storyBottom="Mentoring mi přinesl úlevu od skličujícího množství informací,
                které při samostudiu vyplynou. Praktické rady a moderní pojetí
                webdesignu mě posunulo o obrovský kus dál!"
                            />
                            <WhyStory
                                position=" Junior React Developer"
                                name="Pavel Jeřabina"
                                storyTop="Kdybych to nezažila, nevěřila bych. Může v pracovní sféře
                existovat přátelská a vlídná komunitam, která mi ochotně pomůže
                ze slepé uličky?"
                                storyBottom="Mentoring mi přinesl úlevu od skličujícího množství informací,
                které při samostudiu vyplynou. Praktické rady a moderní pojetí
                webdesignu mě posunulo o obrovský kus dál!"
                            />
                        </Box>
                    </SimpleGrid>
                )}
            </>
        </Box>
    );
};

export default WhyKenduPart;
