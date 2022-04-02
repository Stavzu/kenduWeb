import { Box, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import {
    AdvanceAcademyPriceInfoData,
    AcademyLoginStepData,
    AcademyQandAData,
} from "../components/Academy/data";
import ForWhoPart from "../components/Academy/ForWhoPart";
import IntroducingPart from "../components/Academy/IntroducingPart";
import NumberPart from "../components/Academy/NumbersPart";
import PhotoPart from "../components/Academy/PhotoPart";
import LoginProcess from "../components/LoginProcess";

import ProductPriceInfo from "../components/ProductPriceInfo";
import QandA from "../components/Q&A";
import SignUpToProduct from "../components/SignUpToProduct";
import SwiperPhoto, { Paginator } from "../components/Swiper";
import WantMoreContainer from "../components/WantMore/WantMoreContainer";

export const benefitsData = [
    {
        id: 1,
        mainText: "first text",
        secondaryText: "first desc",
    },
    {
        id: 2,
        mainText: "second text",
        secondaryText: "second desc",
    },
    {
        id: 3,
        mainText: "thirst text",
        secondaryText: "second desc",
    },
];

// TODO create a slider
const BenefitSlide = ({ mainText, secondaryText }: any) => {
    return (
        <div>
            {mainText} {secondaryText}
        </div>
    );
};

const sliderParams = {
    pagination: {
        el: ".carSwap-pagination",
        clickable: true,
    },
    loop: true,
};

const Akademie: NextPage = () => {
    return (
        <div>
            <IntroducingPart />
            <Box>
                <SwiperPhoto
                    list={benefitsData}
                    Component={BenefitSlide}
                    sliderParams={sliderParams}
                />
            </Box>
            <Center textAlign="center">
                <Paginator className="carSwap-pagination" />
            </Center>
            <NumberPart />
            <PhotoPart />
            <WantMoreContainer title="Chceš být lektorem v Kendu?" />
            <ForWhoPart />
            <ProductPriceInfo
                title="Co vše je v ceně mentoringu"
                data={AdvanceAcademyPriceInfoData}
            />
            <LoginProcess
                title="Jak probíhá přihlašování?"
                data={AcademyLoginStepData}
            />
            <SignUpToProduct buttonText="Chci se přihlásit do Akademie" />
            <QandA items={AcademyQandAData} />
            <WantMoreContainer title="Chceš být lektorem v Kendu?" />
        </div>
    );
};

export default Akademie;
