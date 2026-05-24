Audit the entire current FreelanceOS codebase and add informative comments only where they provide real value.

Project context:

Stack:
- React 19.2.4
- Next.js 16.2.6 (App Router)
- TypeScript 5.9.3
- PostgreSQL
- Prisma 7.8.0
- @prisma/adapter-pg 7.8.0
- next-auth 4.24.14 (route-based setup)
- Zod 4.4.3
- Tailwind CSS 4.3.0

Architecture rules:
- Keep comments concise and useful
- Use "//" comment style only
- Do NOT add obvious comments
- Do NOT comment every line
- Do NOT rewrite working code
- Do NOT change logic or behavior
- Preserve formatting and architecture
- Add comments only when they improve understanding

Comment where useful:

1. File purpose
Example:

// Shared Prisma client instance for application-wide database access

2. Function purpose
Example:

// Create a new user after validating uniqueness and hashing password

3. Important business logic
Example:

// Prevent duplicate email registration

4. Non-obvious implementation details
Example:

// Store Prisma client globally during development to avoid connection exhaustion

5. Architecture boundaries
Example:

// Services contain business logic and database access

6. Security-sensitive code
Example:

// Hash password before storing in database

Do NOT add comments like:

// Import React
// Define function
// Return user
// Create object
// Set variable

If a file is already clear without comments, leave it alone.

At the end provide a report:

Files modified:
- file.ts
- file.ts

Comments added:
- File purpose comments
- Business logic comments
- Security comments
- Architecture comments

Files intentionally left unchanged:
- file.ts