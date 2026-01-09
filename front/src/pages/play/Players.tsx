import React from "react";
import "./Players.css";
import { Link, useNavigate } from "react-router";
import { PlayAPI } from "../../global/PlayAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Players = () => {
    const navigate = useNavigate();
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
        <main className="play__container">
            <section className="play__grid">
                {PL && PL.map((play) => (
                    <aside 
                        className="play__card" 
                        key={play.id}
                    >
                        <section className="play__header">
                            <div className="play__name">
                                {play.first} {play.last}
                            </div>
                            <div className="play__age">
                                Age: {play.age}
                            </div>
                            <div className="play__info">
                                Info: {play.info}
                            </div>
                        </section>

                        <section className="play__actions">
                            <button 
                                className="btn"
                                onClick={() => navigate(`/play/${play.id}`)}
                            >
                                View Player
                            </button>
                        </section>
                    </aside>
                ))}
            </section>
        </main>
    )}
    </React.Fragment>
    );
};



