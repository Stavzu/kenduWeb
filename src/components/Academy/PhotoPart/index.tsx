import React, { FC } from "react";
import PageContainer from "../../PageContainer";
import PhotoGrid from "../../WhatWeDo/PhotoGrid";
import { photosData } from "../data";

const PhotoPart: FC = () => {
    return (
        <PageContainer>
            <PhotoGrid photos={photosData} />
        </PageContainer>
    );
};

export default PhotoPart;
