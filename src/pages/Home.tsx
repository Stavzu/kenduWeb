import React from "react";
import FollowUs from "../components/Welcome/FollowUsPart";
import OurPartners from "../components/Welcome/OurPartnersPart";
import ProductsList from "../components/Welcome/WhatWeDoPart/ProductsList";
import HeroPart from "../components/Welcome/HeroPart";
import StoriesPart from "../components/Welcome/StoriesPart";

import WhyKenduPart from "../components/Welcome/WhyKenduPart";
import WantMoreContainer from "../components/WantMore/WantMoreContainer";

export function Home() {
    return (
        <>
            <HeroPart />
            <ProductsList />
            <StoriesPart />
            <WhyKenduPart />
            <OurPartners />
            <WantMoreContainer type="slack" title="Chceš vědět víc o Kendu?" />
            <FollowUs />
        </>
    );
}
