import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import BlockTitle from "../BlockTitle";
import PageContainer from "../PageContainer";
import Accordion from "./Accordion";

interface Props {
    readonly title: string;
    readonly content: string;
}

const QandA: FC<{ items: Props[] }> = ({ items }) => {
    return (
        <Box
            mt="10rem"
            bg="#F5F5F5"
            py={{
                base: "7.2rem",
                lg: "20rem",
            }}
        >
            <PageContainer>
                <BlockTitle>Q&A</BlockTitle>
                <Accordion items={items} />
            </PageContainer>
        </Box>
    );
};

export default QandA;
