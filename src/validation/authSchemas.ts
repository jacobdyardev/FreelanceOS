import { z } from "zod";

// Login form validation
export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

// Registration form validation
export const registerSchema = z
  .object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;