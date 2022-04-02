import React, { FC } from "react";
import PageContainer from "../../PageContainer";
import ForWhoIsThis from "../../WhatWeDo/ForWhoIsThis";
import { forWhoData } from "./forWhoData";

const ForWhoPart: FC = () => {
    return (
        <PageContainer>
            <ForWhoIsThis
                title="Pro koho je akademie určena?"
                forWhoData={forWhoData}
            />
        </PageContainer>
    );
};

export default ForWhoPart;
