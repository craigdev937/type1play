import { z } from "zod";

export const PlayerSchema = z.object({
    first: z.string().min(1, "First name is required!")
        .max(50, "First name is too long!"),
    last: z.string().min(1, "Last name is required!")
        .max(50, "Last name is too long!"),
    age: z.string().refine((vol) => {
        const num = parseInt(vol);
        return !isNaN(num) && num >= 0 && num <= 150;
    }, "Age must be between 0 and 150"),
    info: z.string().min(1, "Info is required")
        .max(500, "Info is too long!")
});

export type PS = z.infer<typeof PlayerSchema>;


