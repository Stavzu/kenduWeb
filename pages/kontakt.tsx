import { NextPage } from "next";
import React from "react";
import Container from "../src/components/Container";

export const Contact: NextPage = () => {
    return <Container>Contacts</Container>;
};

// TODO check with Brano about several data

Contact.getInitialProps = async (ctx) => {
    return {};
};

export default Contact;
