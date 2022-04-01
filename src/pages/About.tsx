import React from "react";
import FollowUs from "../components/About/FollowUsPart";
import ProductsList from "../components/About/WhatWeDoPart/ProductsList";

export function About() {
    return (
        <div>
            About
            <ProductsList />
            <FollowUs />
        </div>
    );
}
