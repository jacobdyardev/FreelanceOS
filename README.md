# FreelanceOS

Full stack SaaS application for client, project, and workflow management built with React, Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

Current and planned functionality:

- Authentication and user accounts
- Client management
- Project management
- Task management
- Workflow organization
- Dashboard metrics
- Search and filtering

## Tech Stack

### Frontend

- React 19.2.4
- Next.js 16.2.6 (App Router)
- TypeScript 5.9.3
- Tailwind CSS 4.3.0

### Backend

- PostgreSQL
- Prisma 7.8.0
- NextAuth v4.24.14
- Zod 4.4.3
- bcryptjs 3.0.3

### Testing

- Vitest

## Architecture

Current project structure:

```text
prisma
└── schema.prisma

public

src
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   │
│   │   └── register
│   │       └── route.ts
│   │
│   └── login
│       └── page.tsx
│
├── components
│   └── auth
│       └── LoginForm.tsx
│
├── constants
├── hooks
│
├── lib
│   ├── auth
│   │   └── auth.config.ts
│   │
│   └── prisma.ts
│
├── services
│   └── userService.ts
│
├── types
│   └── next-auth.d.ts
│
├── utils
│
└── validation
    └── authSchemas.ts
```

## Current Status

Actively developing core infrastructure and application features.

Completed:

### Infrastructure

- Next.js application setup
- TypeScript configuration
- Tailwind configuration
- GitHub repository setup
- Project architecture setup

### Database

- PostgreSQL integration
- Prisma 7 configuration
- Database schema design
- Database migrations
- Shared Prisma client setup

### Authentication

- NextAuth v4 credentials authentication
- User registration API
- Password hashing with bcrypt
- Credentials login flow
- JWT session strategy
- Custom login page
- Session type extensions

### Validation

- Zod authentication schemas
- Registration validation
- Login validation

### Architecture

- Service layer structure
- Validation layer structure
- Authentication structure
- Shared utilities structure

## Currently Building

- Protected routes
- Dashboard foundation
- Client management system

## Planned

- Project management
- Task management
- Dashboard metrics
- Search and filtering
- Activity timeline
- Notifications
- User settings