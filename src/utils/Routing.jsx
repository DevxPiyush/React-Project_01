import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home.jsx";
import Details from "../Components/Details.jsx";

const Routing = () => {
    return (
        <div className="ml-[18%] w-[82%] h-screen overflow-y-auto p-10">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </div>
    );
};

export default Routing;