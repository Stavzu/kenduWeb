import React, { FC } from "react";
import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";

interface IContainer {
    readonly children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Container;
