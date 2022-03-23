import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Akademie from "./pages/Akademie";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import Meetupy from "./pages/Meetupy";
import Mentoring from "./pages/Mentoring";
import { Partners } from "./pages/Partners";
import { Products } from "./pages/Products";
import { Stories } from "./pages/Stories";

const RoutesPaths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contacts />} />
            <Route path="/partneri" element={<Partners />} />
            <Route path="/co-delame" element={<Products />} />
            <Route path="/pribehy" element={<Stories />} />
            <Route path="/mentoring" element={<Mentoring />} />
            <Route path="/akademie" element={<Akademie />} />
            <Route path="/meetupy" element={<Meetupy />} />
        </Routes>
    );
};

export default RoutesPaths;
