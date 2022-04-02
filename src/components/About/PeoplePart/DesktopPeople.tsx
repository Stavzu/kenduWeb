import React, { useState, FC } from "react";
import { Grid } from "@chakra-ui/react";
import { peopleData } from "./PeopleData";
import PersonTypeFilter from "./PersonTypeFilter";
import PersonCard from "./PersonCard";
import { PeopleGridStyle } from "./styles";
import { HelpingPeopleType } from "../../constants";

const DesktopPeople: FC = () => {
    const [selectedType, setSelectedType] = useState(
        HelpingPeopleType.GRADUATE
    );

    const selectedPeople = peopleData.filter(
        (person) => person.type === selectedType
    );

    return (
        <>
            <PersonTypeFilter
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Grid {...PeopleGridStyle}>
                {selectedPeople.map((person) => {
                    return <PersonCard person={person} />;
                })}
            </Grid>
        </>
    );
};

export default DesktopPeople;
