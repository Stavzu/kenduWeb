import { Box, Grid, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { PhotoGridStyle } from "../../Academy/PhotoPart/style";
import { IPhotos } from "../../Academy/PhotoPart/types";

const PhotoGrid: FC<{ photos: IPhotos[] }> = ({ photos }) => {
    return (
        <Grid {...PhotoGridStyle}>
            {photos.map((photo) => {
                return (
                    <Box gridArea={photo.grid}>
                        <Image
                            width="100%"
                            height="100%"
                            objectFit="contain"
                            src={`/${photo.image}`}
                            alt={photo.image}
                        />
                    </Box>
                );
            })}
        </Grid>
    );
};

export default PhotoGrid;
