import React, { FC } from "react";
import PageContainer from "../../PageContainer";
import DesktopPeople from "./DesktopPeople";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MobilePeople from "./MobilePeople";

const PeoplePart: FC = () => {
    const isDesktop = useMediaQuery("(min-width: 48em)");

    return (
        <PageContainer>
            {isDesktop ? <DesktopPeople /> : <MobilePeople />}
        </PageContainer>
    );
};

export default PeoplePart;
