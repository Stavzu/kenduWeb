import { GridItem, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import FormikExample from "../../Newsletter/NewsletterInput";
import { NewsletterGridStyle } from "./style";

const NewsletterGridItem: FC = () => {
    return (
        <GridItem {...NewsletterGridStyle}>
            <Text
                fontSize="2.4rem"
                lineHeight="3rem"
                fontWeight="800"
                mb="2rem"
            >
                Sleduj co je nového
            </Text>
            <FormikExample />
            <Text
                fontSize="xs"
                color="brand.grey.3"
                fontWeight="400"
                lineHeight="160%"
                mt="1.6rem"
            >
                Notifikace o akademií nebo mentoringu. Meetupy. Příběhy
                absolventů. Max jeden mail měsíčně.
            </Text>
        </GridItem>
    );
};

export default NewsletterGridItem;
