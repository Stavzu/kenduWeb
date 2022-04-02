//import React from "react";
import FollowUs from "../src/components/Welcome/FollowUsPart";
import OurPartners from "../src/components/Welcome/OurPartnersPart";
import ProductsList from "../src/components/Welcome/WhatWeDoPart/ProductsList";
import HeroPart from "../src/components/Welcome/HeroPart";
import StoriesPart from "../src/components/Welcome/StoriesPart";
import Container from "../src/components/Container";

import WhyKenduPart from "../src/components/Welcome/WhyKenduPart";
import WantMoreContainer from "../src/components/WantMore/WantMoreContainer";
import { NextPage } from "next/types";

const Home: NextPage = () => {
    return (
        <Container>
            <HeroPart />
            <ProductsList />
            <StoriesPart />
            <WhyKenduPart />
            <OurPartners />
            <WantMoreContainer type="slack" title="Chceš vědět víc o Kendu?" />
            <FollowUs />
        </Container>
    );
};

// check with Brano about several data
Home.getInitialProps = async (ctx) => {
    return {};
};

export default Home;
