import React from "react";
import Lista from "../lista";
import Login from "../login";

import { Section } from "./styles";

const Home = () => {
    const [token, setToken] = React.useState(
        sessionStorage.getItem("@kanban-token")
    );

    React.useEffect(() => {
        setToken(sessionStorage.getItem("@kanban-token"));
    }, [token]);

    console.log(token);

    return <Section>{token === null ? <Login /> : <Lista />}</Section>;
};

export default Home;
