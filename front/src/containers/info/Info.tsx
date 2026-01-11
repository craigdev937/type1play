import React from "react";
import "./Info.css";
import { useParams, useNavigate } from "react-router";
import { PlayAPI } from "../../global/PlayAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Info = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data: info } = PlayAPI.useInfoQuery(PID);
    const IN = info!;
    
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
            <main className="info__container">
                <h2>View Player</h2>
                <section className="info__view">
                    <aside className="info__field">
                        <div className="info__label">First Name</div>
                        <div className="info__value">{IN.first}</div>
                    </aside>
                    <aside className="info__field">
                        <div className="info__label">Last Name</div>
                        <div className="info__value">{IN.last}</div>
                    </aside>
                    <aside className="info__field">
                        <div className="info__label">Age</div>
                        <div className="info__value">{IN.age}</div>
                    </aside>
                    <aside className="info__field">
                        <div className="info__label">Info</div>
                        <div className="info__value">{IN.info}</div>
                    </aside>

                    <aside className="info__buttons">
                        <button 
                            className="btn btn__sec"
                            onClick={() => navigate("/")}
                        >
                            Back to List
                        </button>
                        <button 
                            className="btn btn__sec"
                            onClick={() => navigate(`/edit/${IN.id}`)}
                        >
                            Edit Player
                        </button>
                    </aside>
                </section>
            </main>
        )}
    </React.Fragment>
    );
};


