import React from "react";
import LoginProcess from "../components/LoginProcess";
import ContentPart from "../components/Mentoring/ContentPart";
import {
    contentMentoringData,
    mentoringLoginStepData,
    mentoringPriceInfoData,
    mentoringQandAData,
} from "../components/Mentoring/data";
import ForWhoPart from "../components/Mentoring/ForWhoPart";
import IntroducingPart from "../components/Mentoring/IntroducingPart";
import NumbersPart from "../components/Mentoring/NumbersPart";
import PhotoPart from "../components/Mentoring/PhotoPart";
import ProductPriceInfo from "../components/ProductPriceInfo";
import QandA from "../components/Q&A";
import SignUpToProduct from "../components/SignUpToProduct";
import WantMoreContainer from "../components/WantMore/WantMoreContainer";

const Mentoring = () => {
    return (
        <div>
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
        </div>
    );
};

export default Mentoring;
