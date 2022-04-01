import { GridItem, Text } from "@chakra-ui/react";
import React from "react";
import FormikExample from "../../Newsletter/NewsletterInput";

const NewsletterGridItem = () => {
    return (
        <GridItem
            rowSpan={{ base: 1, md: 2, lg: 2 }}
            colSpan={{
                base: 1,
                md: 5,
                lg: 2,
            }}
            mt={{
                md: "30px",
                xl: "0",
            }}
        >
            <Text fontSize="24px" lineHeight="30px" fontWeight="800" mb="20px">
                Sleduj co je nového
            </Text>
            <FormikExample />
            <Text
                fontSize="xs"
                color="brand.grey.3"
                fontWeight="400"
                lineHeight="160%"
                mt="16px"
            >
                Notifikace o akademií nebo mentoringu. Meetupy. Příběhy
                absolventů. Max jeden mail měsíčně.
            </Text>
        </GridItem>
    );
};

export default NewsletterGridItem;
