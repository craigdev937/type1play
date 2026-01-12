import React from "react";
import "./Players.css";
import { useNavigate } from "react-router";
import { PlayAPI } from "../../global/PlayAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Players = () => {
    const navigate = useNavigate();
    const { error, isLoading, 
        data } = PlayAPI.useAllPlayersQuery();
    const [deletePlayer] = PlayAPI.useDeleteMutation();
    const PL = data;
    
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

    const handleDelete = async (id: string) => {
        if (window.confirm("Delete this Player?")) {
            await deletePlayer(id);
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
                                className="btn btn__small btn__sec"
                                onClick={() => navigate(`/info/${play.id}`)}
                            >
                                View Player
                            </button>
                            <button 
                                className="btn btn__small btn__sec"
                                onClick={() => navigate(`/edit/${play.id}`)}
                            >
                                Edit Player
                            </button>
                            <button 
                                className="btn btn__small"
                                onClick={() => handleDelete(play.id)}
                            >
                                Delete
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



