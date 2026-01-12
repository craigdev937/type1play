import React from "react";
import "./Edit.css";
import { useParams, useNavigate } from "react-router";
import { Form } from "../form/Form";
import { PlayAPI } from "../../global/PlayAPI";
import { IPlay } from "../../models/Interfaces";
import { Spinner } from "../../components/spin/Spinner";

export const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PID = id !== undefined ? Number(id) : 0;
    const [updatePlayer] = PlayAPI.useUpdateMutation();
    const { error, isLoading, 
        data: player } = PlayAPI.useInfoQuery(PID);

    const handleUpdate = async (data: IPlay) => {
        if (id) {
            await updatePlayer({id, ...data});
            navigate("/");
        }
    };

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
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className="edit__container">
                    <h2>Edit Record</h2>
                    <Form 
                        submitLabel="Update Player"
                        initialData={player}
                        onSubmit={handleUpdate}
                    />
                </main>
            )}
        </>
    );
};


