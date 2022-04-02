import React from "react";
import PageContainer from "../../PageContainer";
import ForWhoIsThis from "../../WhatWeDo/ForWhoIsThis";
import { forWhoData } from "./forWhoData";

export default function ForWhoPart() {
    return (
        <PageContainer>
            <ForWhoIsThis
                title="Komu je mentoring určený?"
                forWhoData={forWhoData}
            />
        </PageContainer>
    );
}
