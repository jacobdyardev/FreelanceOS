// Registration API route

import { NextResponse } from "next/server";
import { createUser } from "@/services/userService";
import { registerSchema } from "@/validation/authSchemas";

// Create a new user account
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate incoming registration data before calling the service layer
    const validationResult = registerSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid registration data",
          },
        },
        { status: 400 }
      );
    }

    const user = await createUser({
      name: validationResult.data.name,
      email: validationResult.data.email,
      password: validationResult.data.password,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          user,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "User already exists"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "CONFLICT",
            message: "A user with this email already exists",
          },
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Unable to create user",
        },
      },
      { status: 500 }
    );
  }
}