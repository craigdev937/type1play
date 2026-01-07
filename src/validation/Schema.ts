import { z } from "zod";

export const PSchema = z.object({
    first: z.string().min(2),
    last: z.string().min(2),
    age: z.number().min(1),
    info: z.string().min(5)
});

export const PSUpdate = PSchema.partial();

export type PSType = z.infer<typeof PSchema>;
export type UpdateType = z.infer<typeof PSUpdate>;


