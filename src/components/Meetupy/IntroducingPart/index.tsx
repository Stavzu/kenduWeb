import { Box } from "@chakra-ui/react";
import React from "react";
import MainPageInfo from "../../MainPageInfo";
import PageContainer from "../../PageContainer";

function IntroductingPart() {
    return (
        <PageContainer>
            <Box mt="11rem" display="flex">
                <MainPageInfo
                    title="Meetupy"
                    buttonText="Chci na meetup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non scelerisque nec praesent mauris, volutpat tristique pretium vel tortor. Praesent ullamcorper a lorem eget sed ut. Purus at morbi ullamcorper egestas scelerisque feugiat risus laoreet nunc."
                />
            </Box>
        </PageContainer>
    );
}

export default IntroductingPart;
