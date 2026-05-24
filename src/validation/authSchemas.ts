import { z } from "zod";

// Shared auth form schemas keep input rules aligned across UI and API boundaries.
export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const registerSchema = z
  .object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  // confirmPassword exists only for client/API validation and should never be persisted.
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
