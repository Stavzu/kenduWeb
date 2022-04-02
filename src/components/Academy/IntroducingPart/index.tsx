import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import MainPageInfo from "../../MainPageInfo";
import PageContainer from "../../PageContainer";

const IntroductingPart: FC = () => {
    return (
        <PageContainer>
            <Box mt="11rem" display="flex">
                <MainPageInfo
                    title="Akademie"
                    buttonText="Přihlásit se do Akademie"
                    description="Kendu akademie je program určený pro začátečníky, kteří se chtějí seznámit s komplexním frontendovým programováním. Provedeme vás tím nejdůležitějším: od kódování webové aplikace v HTML a CSS přes seznámení se s principy programování v JavaScriptu až po první krůčky s Reactem."
                />
            </Box>
        </PageContainer>
    );
};

export default IntroductingPart;
