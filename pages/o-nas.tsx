import { NextPage } from "next";
import React from "react";
import AboutPart from "../src/components/About/AboutPart";
import NumberPart from "../src/components/About/NumbersPart";
import PeoplePart from "../src/components/About/PeoplePart";
import Container from "../src/components/Container";
import WantMoreContainer from "../src/components/WantMore/WantMoreContainer";

export const About: NextPage = () => {
    return (
        <Container>
            <AboutPart />
            <NumberPart />
            <PeoplePart />
            <WantMoreContainer type="slack" title="Chceš být součástí Kendu?" />
        </Container>
    );
};

// TODO check Branos list what he want
About.getInitialProps = async (ctx) => {
    return {};
};

export default About;
