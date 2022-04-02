import { Box } from "@chakra-ui/react";
import React from "react";
import MainPageInfo from "../../MainPageInfo";
import PageContainer from "../../PageContainer";

function IntroductingPart() {
    return (
        <PageContainer>
            <Box mt="11rem" display="flex">
                <MainPageInfo
                    title="Mentoring"
                    buttonText="Chci se přihlásit na Mentoring"
                    description="Mentoringový program je ideální pro všechny, kteří už mají s programováním nějakou zkušenost a chtějí se profesně posunout. Během tří měsíců budeš se svým mentorem pracovat na vlastním projektu. Kromě praktických zkušeností, code review a portfolia získáš také certifikát o absolvování mentoringu a spoustu užitečných kontaktů k tomu. "
                />
            </Box>
        </PageContainer>
    );
}

export default IntroductingPart;
