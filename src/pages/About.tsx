import { Box } from "@chakra-ui/react";
import React from "react";
import FollowUs from "../components/About/FollowUsPart";
import OurPartners from "../components/About/OurPartnersPart";
import ProductsList from "../components/About/WhatWeDoPart/ProductsList";

export function About() {
    return (
        <div>
            About
            <ProductsList />
            <OurPartners />
            <Box height="400px">a</Box>
            <FollowUs />
        </div>
    );
}
