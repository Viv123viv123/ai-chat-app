# Collaborative AI Project

A full-stack collaborative project workspace built with React, Vite, Node.js, Express, MongoDB, and Socket.IO. The application includes user authentication, project management, real-time collaboration, AI-assisted messaging, and a browser-based code sandbox experience.

## Features

- User registration, login, profile, and logout
- JWT-based authentication for protected API routes
- Project creation, collaborator management, and file-tree updates
- Real-time project chat powered by Socket.IO
- AI assistant integration using an AI message trigger (`@ai`)
- Markdown rendering and code syntax highlighting in chat
- WebContainer-based in-browser code preview for project files

## Architecture

- `backend/`: Express API server with routes for users, projects, and AI
- `frontend/`: React app with routing, auth context, and collaborative UI
- `backend/server.js`: HTTP server with Socket.IO and authenticated socket middleware
- `backend/app.js`: Express app configuration and API route mounting

## Tech Stack

- Backend: Node.js, Express, Mongoose, MongoDB, Socket.IO, JWT, bcrypt, Google Generative AI
- Frontend: React, Vite, React Router, Axios, Tailwind CSS, Markdown-to-JSX, Highlight.js

## Installation

### Backend

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_API_KEY=your_google_api_key
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for the frontend:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Register a new user via the frontend `/register` page.
2. Log in at `/login`.
3. Create or open a project from the home screen.
4. Use the project chat to message collaborators.
5. Type `@ai` in a chat message to invoke the AI assistant.
6. Add collaborators from the project screen to share the workspace.

## API Endpoints

### User routes

- `POST /users/register` — register a new user
- `POST /users/login` — authenticate user and receive a JWT
- `GET /users/profile` — get user profile (requires auth)
- `GET /users/logout` — logout current user (requires auth)
- `GET /users/all` — list all users (requires auth)

### Project routes

- `POST /projects/create` — create a new project (requires auth)
- `GET /projects/all` — get all projects for a user (requires auth)
- `PUT /projects/add-user` — add collaborators to a project (requires auth)
- `GET /projects/get-project/:projectId` — fetch project details (requires auth)
- `PUT /projects/update-file-tree` — update project file tree (requires auth)

### AI routes

- `GET /ai/get-result` — retrieve AI-generated responses

## Notes

- The frontend uses `VITE_API_URL` to connect to the backend.
- Socket authentication requires a valid JWT token and a valid project ID.
- The AI assistant listens for messages containing `@ai` and responds with generated content.
- Messages from the AI may include code blocks and markdown formatting.

## Folder Structure

- `backend/`
  - `controllers/`
  - `models/`
  - `routes/`
  - `services/`
  - `middleware/`
  - `db/`
- `frontend/`
  - `src/`
    - `auth/`
    - `config/`
    - `context/`
    - `routes/`
    - `screens/`

## Recommended Improvements

- Add start scripts to `backend/package.json`
- Add validation and error handling in the frontend
- Add tests for backend routes and frontend components
- Add Docker support for local development

---

Happy coding!