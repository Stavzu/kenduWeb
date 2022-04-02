import React, { FC } from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
} from "@chakra-ui/react";
import PeopleAccordionContent from "./PeopleAccordionContent";
import { AccordionButtonStyle } from "./styles";
import { IPeopleType } from "./types";

const CollapsedIPersonType: FC<{ title: string; data: IPeopleType[] }> = ({
    title,
    data,
}) => {
    return (
        <AccordionItem
            borderTop="none"
            borderBottom="1px"
            borderBottomColor="brand.grey.500"
        >
            <AccordionButton {...AccordionButtonStyle}>
                <Box flex="1" textAlign="left">
                    <Text
                        color="brand.text.1"
                        fontSize="4.4rem"
                        lineHeight="4rem"
                    >
                        {title}
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
                <PeopleAccordionContent data={data} />
            </AccordionPanel>
        </AccordionItem>
    );
};

export default CollapsedIPersonType;
