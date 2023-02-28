import React from "react";
import { ToastContainer } from "react-toastify";

import Home from "./components/home";

const App = () => {
    return (
        <>
            <Home />
            <ToastContainer />
        </>
    );
};

export default App;
