import React from "react";
import Navigation from "./Components/Navigation.jsx";
import Routing from "./utils/Routing.jsx";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className="h-screen w-screen overflow-hidden flex bg-zinc-50">

            {/* Sidebar */}
<Navigation/>
            {/* Products Section */}
<Routing/>
        </div>
    );
};

export default App;