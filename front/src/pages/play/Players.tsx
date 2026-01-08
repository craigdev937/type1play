import React from "react";
import "./Players.css";
import { PlayAPI } from "../../global/PlayAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Players = () => {
    const { error, isLoading, 
        data } = PlayAPI.useAllPlayersQuery();
    const PL = data;
    console.log(PL);
    
    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main>
                    <section>
                        {PL && PL.map((play) => (
                            <aside key={play.id}>
                                <h1>{play.first} {play.last}</h1>
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};



