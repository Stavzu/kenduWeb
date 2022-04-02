import { Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import BlockTitle from "../../BlockTitle";
import { IContentPart } from "../../Mentoring/ContentPart";
import ContenCard from "./ContenCard";

interface IContentDescription {
    readonly data: IContentPart[];
    readonly title: string;
}

const ContentDescription: FC<IContentDescription> = ({ data, title }) => {
    return (
        <>
            <BlockTitle>{title}</BlockTitle>
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1fr 1fr 1fr",
                }}
                gap="4rem"
            >
                {data.map((content) => {
                    return (
                        <ContenCard
                            icon={content.icon}
                            title={content.title}
                            description={content.description}
                        />
                    );
                })}
            </Grid>
        </>
    );
};

export default ContentDescription;
