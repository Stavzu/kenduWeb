import React, { FC } from "react";
import { Box, Text, HStack, Image } from "@chakra-ui/react";
import { ArrowRight } from "../../../assets/svg/arrow-right";
import { Mail } from "../../../assets/svg/mail";
import { Linkedin } from "../../../assets/svg/linkednin";
import {
    PersonNameStyle,
    PersonPositionStyle,
    PersonStoryBoxStyle,
    PersonTextStyle,
} from "./styles";
import { IPeopleType } from "./types";

const PersonCard: FC<{ person: IPeopleType }> = ({ person }) => {
    return (
        <Box mt="4rem">
            <Image
                src={person.image}
                alt={`${person.name}`}
                height="33rem"
                width="28.5rem"
            />
            <Text {...PersonNameStyle}>{person.name}</Text>
            <Text {...PersonPositionStyle}>{person.position}</Text>
            <Text {...PersonTextStyle}>{person.text}</Text>
            <Box {...PersonStoryBoxStyle}>
                <Box
                    display="flex"
                    alignItems="center"
                    mb={{
                        lg: "1.8rem",
                    }}
                >
                    <Text
                        fontSize="1.6rem"
                        lineHeight="2.4rem"
                        color="brand.orange.1"
                        mr="1rem"
                    >
                        Můj příběh
                    </Text>
                    <ArrowRight />
                </Box>
                <HStack spacing="1.2rem">
                    <Mail />
                    <Linkedin />
                </HStack>
            </Box>
        </Box>
    );
};

export default PersonCard;
