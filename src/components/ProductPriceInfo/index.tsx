import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import BlockTitle from "../BlockTitle";
import PageContainer from "../PageContainer";
import InfoItem from "./InfoItem";
import Price from "./Price";

export interface IProductPrinceInfo {
    readonly id: number;
    readonly text: string;
}

const ProductPriceInfo: FC<{ data: IProductPrinceInfo[]; title: string }> = ({
    data,
    title,
}) => {
    return (
        <PageContainer>
            <SimpleGrid columns={[1, 1, 2]}>
                <Box
                    mb={{
                        base: "4.8rem",
                    }}
                >
                    <BlockTitle>{title}</BlockTitle>
                    <Price price="4 500" />
                </Box>

                <Box>
                    {data.map((info) => {
                        return <InfoItem info={info} />;
                    })}
                </Box>
            </SimpleGrid>
        </PageContainer>
    );
};

export default ProductPriceInfo;
