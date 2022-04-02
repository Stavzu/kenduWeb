import React from "react";
import { contentMeetupsData } from "../src/components/Meetupy/data";
import IntroducingPart from "../src/components/Meetupy/IntroducingPart";
import ContentPart from "../src/components/Mentoring/ContentPart";
import WantMoreContainer from "../src/components/WantMore/WantMoreContainer";
import Container from "../src/components/Container";
import { NextPage } from "next";

export const Meetups: NextPage = () => {
    return (
        <Container>
            <IntroducingPart />
            <ContentPart data={contentMeetupsData} />
            <WantMoreContainer title="Kdy bude další Meetup?" />
        </Container>
    );
};

// check with Brano about several data

Meetups.getInitialProps = async (ctx) => {
    return {};
};

export default Meetups;
