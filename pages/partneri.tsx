import { NextPage } from "next";
import React from "react";
import Container from "../src/components/Container";

export const Partners: NextPage = () => {
    return <Container>Partners</Container>;
};

// TODO check point data with Brano
Partners.getInitialProps = async (ctx) => {
    return {};
};

export default Partners;
