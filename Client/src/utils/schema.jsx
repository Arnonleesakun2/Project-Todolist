import { z } from "zod";

export const schema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(20, "Title must not be more than 20 characters long"),
  time: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description must not be more than 1000 characters long"),
});
