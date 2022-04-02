import React from "react";
import PageContainer from "../../PageContainer";
import PhotoGrid from "../../WhatWeDo/PhotoGrid";
import { photos } from "./photosData";

const PhotoPart = () => {
    return (
        <PageContainer>
            <PhotoGrid data={photos} />
        </PageContainer>
    );
};

export default PhotoPart;
