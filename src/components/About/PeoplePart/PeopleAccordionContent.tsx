import React, { FC, useState } from "react";
import { Button } from "@chakra-ui/react";
import PersonCard from "./PersonCard";
import { IPeopleType } from "./types";
import { ShowButton } from "./styles";

const PeopleAccordionContent: FC<{ data: IPeopleType[] }> = ({ data }) => {
    const itemLimit = 3;
    const [showNextPeople, setShowNextPeople] = useState(false);
    const firstMultiplePeople = data.slice(0, itemLimit);
    const isMoreThenThreePeople = data.length > itemLimit;
    const nextMultiplePeople = data.slice(itemLimit, 100);

    return (
        <>
            {firstMultiplePeople.map((person) => (
                <PersonCard person={person} />
            ))}
            {showNextPeople &&
                nextMultiplePeople.map((person) => (
                    <PersonCard person={person} />
                ))}
            {isMoreThenThreePeople && (
                <Button
                    isFullWidth
                    {...ShowButton}
                    onClick={() => setShowNextPeople(!showNextPeople)}
                >
                    {showNextPeople ? "Zobrazit méně" : "Zobrazit další"}
                </Button>
            )}
        </>
    );
};

export default PeopleAccordionContent;
