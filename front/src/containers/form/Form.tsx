import "./Form.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlayerSchema, PSType } from "../../validation/Schema";
import { IPlay } from "../../models/Interfaces";

type Props = {
    initialData?: IPlay,
    onSubmit: (data: IPlay) => void,
    submitLabel?: string
};

export const Form = 
({ initialData, onSubmit, submitLabel = "Create Player" }: Props) => {
    const { register, handleSubmit, 
        formState: { errors } } = useForm<PSType>({
        resolver: zodResolver(PlayerSchema),
        defaultValues: initialData
    });

    return (
        <form 
            className="form__container"
            onSubmit={handleSubmit(onSubmit)}
        >
            <aside className="form__group">
                <label htmlFor="first">First Name</label>
                <input id="first" {...register("first")} />
                {errors.first && 
                    <span className="error"
                    >{errors.first.message}
                </span>} 
            </aside>

            <aside className="form__group">
                <label htmlFor="last">Last Name</label>
                <input id="last" {...register("last")} />
                {errors.last && 
                    <span className="error"
                    >{errors.last.message}
                </span>} 
            </aside>

            <aside className="form__group">
                <label htmlFor="age">Age</label>
                <input 
                    id="age" 
                    type="number" 
                    {...register("age", {
                        valueAsNumber: true
                    })} 
                />
                {errors.age && 
                    <span className="error"
                    >{errors.age.message}
                </span>} 
            </aside>

            <aside className="form__group">
                <label htmlFor="info">Info</label>
                <textarea id="info" {...register("info")} />
                {errors.info && 
                    <span className="error"
                    >{errors.info.message}
                </span>} 
            </aside>
            <button 
                type="submit" 
                className="btn"
                >{submitLabel}
            </button>
        </form>
    );
};




