import { Box, Center } from "@chakra-ui/react";
import React from "react";
import {
    AdvanceAcademyPriceInfoData,
    AcademyLoginStepData,
    AcademyQandAData,
} from "../src/components/Academy/data";
import ForWhoPart from "../src/components/Academy/ForWhoPart";
import IntroducingPart from "../src/components/Academy/IntroducingPart";
import NumberPart from "../src/components/Academy/NumbersPart";
import PhotoPart from "../src/components/Academy/PhotoPart";
import LoginProcess from "../src/components/LoginProcess";

import ProductPriceInfo from "../src/components/ProductPriceInfo";
import QandA from "../src/components/Q&A";
import SignUpToProduct from "../src/components/SignUpToProduct";
import SwiperPhoto, { Paginator } from "../src/components/Swiper";
import WantMoreContainer from "../src/components/WantMore/WantMoreContainer";
import Container from "../src/components/Container";

// TODO

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

const BenefitSlide = ({ mainText, secondaryText }: any) => {
    return (
        <Box>
            {mainText} {secondaryText}
        </Box>
    );
};

const sliderParams = {
    pagination: {
        el: ".carSwap-pagination",
        clickable: true,
    },
    loop: true,
};

const Academy = () => {
    return (
        <Container>
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
        </Container>
    );
};

Academy.getInitialProps = async (ctx) => {
    return {};
};

export default Academy;
