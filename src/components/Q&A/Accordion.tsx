import { Box, Text, Flex, background } from "@chakra-ui/react";
import React, { useState, FC } from "react";
import TetrisItem from "../Tetris/TetrisItem";
import { AccordionTitleStyle, ContentStyle } from "./style";

export interface IAccordionItems {
    readonly title: string;
    readonly content: string;
}

const getAccordionItems = ({
    items,
    onTitleClick,
    activeIndex,
}: {
    items: IAccordionItems[];
    onTitleClick: (index: number) => void;
    activeIndex: number;
}) => {
    return items.map((item, index) => {
        const active = index === activeIndex;

        return (
            <Box
                mb="8rem"
                key={item.title}
                pb="4rem"
                borderBottom="1px solid #E5E5E5"
            >
                <Flex
                    onClick={() => onTitleClick(index)}
                    justifyContent="space-between"
                    alignItems="center"
                    mb={{
                        base: "1.2rem",
                        lg: "1.7rem",
                    }}
                >
                    <Text {...AccordionTitleStyle}>{item.title}</Text>

                    <TetrisItem
                        color={active ? "brand.yellow" : "brand.orange.main"}
                        size="4rem"
                    >
                        {active ? "-" : "+"}
                    </TetrisItem>
                </Flex>

                <Box display={active ? "block" : "none"}>
                    <Text {...ContentStyle}>{item.content}</Text>
                </Box>
            </Box>
        );
    });
};

const Accordion: FC<{ items: IAccordionItems[] }> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onTitleClick = (index: number) => {
        setActiveIndex(index);
    };

    const renderedItems = getAccordionItems({
        items,
        onTitleClick,
        activeIndex,
    });

    return <Box>{renderedItems}</Box>;
};

export default Accordion;
