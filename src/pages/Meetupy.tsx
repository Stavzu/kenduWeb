import React from "react";
import { contentMeetupsData } from "../components/Meetupy/data";
import IntroducingPart from "../components/Meetupy/IntroducingPart";
import ContentPart from "../components/Mentoring/ContentPart";
import WantMoreContainer from "../components/WantMore/WantMoreContainer";

function Meetupy() {
    return (
        <div>
            <IntroducingPart />
            <ContentPart data={contentMeetupsData} />
            <WantMoreContainer title="Kdy bude další Meetup?" />
        </div>
    );
}

export default Meetupy;
