import React, { FC } from "react";
import StoryBlock from "./StoryBlock";
import AllStoriesLink from "./AllStoriesLink";
import BlockTitle from "../../BlockTitle";
import PageContainer from "../../PageContainer";

const StoriesPart: FC = () => {
    return (
        <PageContainer>
            <BlockTitle>Příběhy</BlockTitle>
            <StoryBlock
                position="Junior React Developer"
                name="Petra Novaková"
                title="Konečně jsem si začala věřit"
                photo="/images/people/eliska-story.png"
            />
            <StoryBlock
                position="Junior React Developer"
                name="Jiří Procházka"
                title="Kromě znalosti jsem poznal i fajnové lidi"
                photo="/images/people/jiri-story.png"
                reverse
            />
            <StoryBlock
                position="Junior React Developer"
                name="Pavla  Zahradkova"
                title="Nebojím se najít si práci, protože vím, že na to mám"
                photo="/images/people/pavla-story.png"
            />
            <AllStoriesLink />
        </PageContainer>
    );
};

export default StoriesPart;
