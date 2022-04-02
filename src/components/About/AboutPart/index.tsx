import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import MainPageInfo from "../../MainPageInfo";
import PageContainer from "../../PageContainer";
import { TetrisBoxes } from "./TetrisBoxes";

const AboutPart: FC = () => {
    return (
        <PageContainer>
            <Box mt="11rem" display="flex">
                <Box>
                    <TetrisBoxes />
                </Box>
                <MainPageInfo
                    title="O nás"
                    buttonText="Chci do Kendu"
                    description="Jsme parta nadšenců, kteří smysluplně pomáhají nováčkům
                        v IT. Předáváme své znalosti, mentorujeme a motivujeme k
                        úspěchu. Učíme programovat úplné začátečníky i
                        zkušenější programátorky a programátory. Pořádáme
                        meetupy, propojujeme lidi a stmelujeme komunitu.
                        Otevíráme dveře do IT světa všem bez rozdílu."
                />
            </Box>
        </PageContainer>
    );
};

export default AboutPart;
