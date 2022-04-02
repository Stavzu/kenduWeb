import { Button, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { HelpingPeopleType } from "../../constants";
import { PersonButtonFilterStyle } from "./styles";
import { helpingPeopleTypes } from "./typesData";

interface IPersonTypeFilter {
    readonly setSelectedType: (selectedType: HelpingPeopleType) => void;
    readonly selectedType: HelpingPeopleType;
}

const PersonTypeFilter: FC<IPersonTypeFilter> = ({
    setSelectedType,
    selectedType,
}) => {
    return (
        <Flex>
            {helpingPeopleTypes?.map((person) => {
                return (
                    <Button
                        color={
                            selectedType === person.type
                                ? "brand.orange.1"
                                : "brand.text.2"
                        }
                        {...PersonButtonFilterStyle}
                        onClick={() => setSelectedType(person.type)}
                    >
                        {person.text}
                    </Button>
                );
            })}
        </Flex>
    );
};

export default PersonTypeFilter;
