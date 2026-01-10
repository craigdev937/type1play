import "./Create.css";
import { useNavigate } from "react-router";
import { Form } from "../../containers/form/Form";
import { PlayAPI } from "../../global/PlayAPI";
import { IPlay } from "../../models/Interfaces";

export const Create = () => {
    const navigate = useNavigate();
    const [addPlayer] = PlayAPI.useAddMutation();

    const handleAdd = async (data: IPlay) => {
        await addPlayer(data);
        navigate("/");
    }

    return (
        <main className="create__container">
            <h2 className="create__title">Create New Player</h2>
            <Form 
                submitLabel="Create Player"
                onSubmit={handleAdd} 
            />
        </main>
    );
};


