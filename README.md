# Learning Experience Platform (LXP)

A modern learning platform built with AdonisJS, focusing on delivering structured courses with various content types and interactive learning experiences.

## Project Overview

This platform allows instructors to create and manage courses, while students can enroll and access various learning materials including videos, articles, PDFs, and interactive practice questions.

## Tech Stack

- **Framework**: AdonisJS 6
- **Database**: SQLite with `better-sqlite3` client
- **ORM**: Lucid
- **Validation**: VineJS
- **API Documentation**: OpenAPI 3.0

## Project Structure

### Models

- **User**: Base user model with authentication support
  - Uses `@adonisjs/auth` for authentication
  - Password hashing using scrypt
  - Email-based authentication

- **Course**: Main course model with relationships
  - Belongs to an Instructor
  - Has many Chapters
  - Has many Enrollments

### Database Structure

```
users
  ├── instructors
  └── students
courses
  ├── topics
  ├── chapters
  └── lessons
      ├── lesson_videos
      ├── lesson_pdfs
      └── lesson_articles
practices
  ├── practice_single_choice_questions
  ├── practice_single_choice_options
  ├── practice_single_choice_user_answers
  └── practice_single_choice_user_results
```

### API Endpoints

All API endpoints follow RESTful conventions and return consistent JSON responses.

#### Users API
- `GET /users` - List users (paginated)
- `POST /users` - Create user
- `GET /users/:id` - Get user details
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

#### Courses API
- `GET /courses` - List courses (paginated)
- `POST /courses` - Create course
- `GET /courses/:id` - Get course details
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

## Conventions

### Controller Structure
- Use API resource controllers (`--api` flag)
- Controllers handle only API-related methods (index, store, show, update, destroy)
- Use resource routes with `apiOnly()`

### Validation
- One validator file per model (e.g., `app/validators/user.ts`)
- Separate validators for create and update operations
- Use `request.validateUsing()` instead of `request.validate()`
- Validators use VineJS with proper type definitions

### Response Format
- Consistent response format across all endpoints
- Paginated responses include metadata
- Relations are included when relevant (e.g., courses include instructor data)
- No wrapping of success messages, return data directly

### Database
- Migrations follow timestamp ordering
- Seeders are organized in the `database/seeders` directory
- Main seeder controls seeding order
- Use proper relationships in models

## Development Practices

1. **Route Definition**
   ```typescript
   router.resource('users', '#controllers/users_controller').apiOnly()
   ```

2. **Controller Methods**
   ```typescript
   async index({ request }: HttpContext) {
     const page = request.input('page', 1)
     const limit = request.input('limit', 10)
     return await Model.query().paginate(page, limit)
   }
   ```

3. **Validation**
   ```typescript
   export const createValidator = vine.compile(
     vine.object({
       field: vine.string().trim()
     })
   )
   ```

## Documentation

- OpenAPI documentation available in `openapi.yaml`
- Each endpoint documented with:
  - Request/response schemas
  - Query parameters
  - Path parameters
  - Response codes
  - Examples

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   ```bash
   node ace migration:run
   ```
4. Seed the database:
   ```bash
   node ace db:seed
   ```
5. Start the development server:
   ```bash
   node ace serve --watch
   ```

## Future Improvements

- [ ] Add authentication middleware
- [ ] Implement course enrollment functionality
- [ ] Add filtering and sorting to list endpoints
- [ ] Implement file upload for lesson materials
- [ ] Add role-based access control
- [ ] Add test coverage 