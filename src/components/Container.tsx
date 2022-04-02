import React, { FC } from "react";
import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Container;
