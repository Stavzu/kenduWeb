import { NextPage } from "next";
import React from "react";
import Container from "../src/components/Container";

export const Stories: NextPage = () => {
    return <Container>Stories</Container>;
};

Stories.getInitialProps = async (ctx) => {
    return {};
};

export default Stories;
