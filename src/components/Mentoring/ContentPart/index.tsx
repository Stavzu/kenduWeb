import React, { FC } from "react";
import PageContainer from "../../PageContainer";
import ContentDescription from "../../WhatWeDo/ContentDescription";

export interface IContentPart {
    readonly id: number;
    readonly title: string;
    readonly icon: string;
    readonly description: string;
}

const ContentPart: FC<{ data: IContentPart[] }> = ({ data }) => {
    return (
        <PageContainer>
            <ContentDescription data={data} title="Co tě čeká" />
        </PageContainer>
    );
};

export default ContentPart;
