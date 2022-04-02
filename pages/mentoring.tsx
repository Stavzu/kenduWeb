//import React from "react";
import LoginProcess from "../src/components/LoginProcess";
import ContentPart from "../src/components/Mentoring/ContentPart";
import {
    contentMentoringData,
    mentoringLoginStepData,
    mentoringPriceInfoData,
    mentoringQandAData,
} from "../src/components/Mentoring/data";
import ForWhoPart from "../src/components/Mentoring/ForWhoPart";
import IntroducingPart from "../src/components/Mentoring/IntroducingPart";
import NumbersPart from "../src/components/Mentoring/NumbersPart";
import PhotoPart from "../src/components/Mentoring/PhotoPart";
import ProductPriceInfo from "../src/components/ProductPriceInfo";
import QandA from "../src/components/Q&A";
import SignUpToProduct from "../src/components/SignUpToProduct";
import WantMoreContainer from "../src/components/WantMore/WantMoreContainer";
import Container from "../src/components/Container";
import { NextPage } from "next";

export const Mentoring: NextPage = () => {
    return (
        <Container>
            <IntroducingPart />
            <NumbersPart />
            <ContentPart data={contentMentoringData} />
            <PhotoPart />
            <ForWhoPart />
            <ProductPriceInfo
                title="Co vše je v ceně mentoringu"
                data={mentoringPriceInfoData}
            />
            <LoginProcess
                title="Jak probíhá přihlašování?"
                data={mentoringLoginStepData}
            />
            <SignUpToProduct buttonText="Chci se přihlásit na Mentoring" />
            <QandA items={mentoringQandAData} />
            <WantMoreContainer title="Chceš být mentorem v Kendu?" />
        </Container>
    );
};

// TODO check with Brano about several data

Mentoring.getInitialProps = async (ctx) => {
    return {};
};

export default Mentoring;
