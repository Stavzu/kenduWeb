import { GridItem, Text } from "@chakra-ui/react";
import React from "react";

const NewsletterGridItem = () => {
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, lg: 2 }}
            colSpan={{
                base: 1,
                md: 5,
                lg: 2,
            }}
        >
            <Text fontSize="24px" lineHeight="30px" fontWeight="800">
                Sleduj co je nového
            </Text>
        </GridItem>
    );
};

export default NewsletterGridItem;
