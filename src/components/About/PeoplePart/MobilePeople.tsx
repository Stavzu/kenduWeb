import { Accordion } from "@chakra-ui/react";
import React, { FC } from "react";
import CollapsedIPersonType from "./CollapsedIPersonType";
import { peopleData } from "./PeopleData";
import { IPeopleType, IPersonType } from "./types";
import { helpingPeopleTypes } from "./typesData";

const getPeopleType = (personType: IPersonType): IPeopleType[] => {
    // TODO slider
    const filteredPeople = peopleData.filter(
        (person) => person.type === personType.type
    );

    return peopleData.filter((person) => person.type === personType.type);
};

const MobilePeople: FC = () => {
    return (
        <Accordion allowToggle defaultIndex={0}>
            {helpingPeopleTypes.map((personType) => {
                return (
                    <CollapsedIPersonType
                        data={getPeopleType(personType)}
                        title={personType.text}
                    />
                );
            })}
        </Accordion>
    );
};

export default MobilePeople;
