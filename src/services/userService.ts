// User service functions own registration business rules and persistence.

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

// Create a user only after enforcing unique email ownership and hashing the password.
export async function createUser(
  data: CreateUserInput
) {
  // Enforce email uniqueness at the service layer before attempting the insert.
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Persist only a bcrypt hash so raw passwords never reach the database.
  const passwordHash = await bcrypt.hash(
    data.password,
    10
  );

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash,
    },

    // Keep the hash internal even though Prisma just created the record.
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  return user;
}
