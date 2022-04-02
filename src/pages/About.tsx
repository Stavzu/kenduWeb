import { NextPage } from "next";
import React from "react";
import AboutPart from "../components/About/AboutPart";
import NumberPart from "../components/About/NumbersPart";
import PeoplePart from "../components/About/PeoplePart";
import WantMoreContainer from "../components/WantMore/WantMoreContainer";

export const About: NextPage = () => {
    return (
        <>
            <AboutPart />
            <NumberPart />
            <PeoplePart />
            <WantMoreContainer type="slack" title="Chceš být součástí Kendu?" />
        </>
    );
};
