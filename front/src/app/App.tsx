import React from "react";
import "./App.css";
import LL from "@public/LL and Rick.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={LL} alt="LL Cool J and Rick" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};



