# Blogify

Blogify is a full-stack blog platform with a polished React interface and an Express/MongoDB API. It provides the foundations for user accounts, blog posts, and comments.

> **Project status:** The backend API is implemented. The current frontend presents mock posts and uses simulated login, signup, post creation, and comment actions; it is not yet connected to the API.

## Features

- Browse a responsive, animated blog interface
- View post details and comments
- Create posts through the frontend UI
- Sign up and log in through the frontend UI
- JWT-based backend authentication
- Create, read, update, and delete posts through protected API endpoints
- Add and retrieve comments through the API

## Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | React, React Router, Axios, Framer Motion, Lucide React |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB |
| Authentication | JSON Web Tokens and bcrypt |

## Project structure

```text
blog-platform-main/
+-- frontend/             # React client
|   +-- src/
|       +-- components/   # Layout and reusable UI components
|       +-- pages/        # Home, post, auth, and post-creation pages
|       +-- api/          # Axios API client configuration
+-- backend/              # Express API
    +-- models/           # User, Post, and Comment schemas
    +-- routes/           # Auth, post, and comment endpoints
    +-- middleware/       # JWT authentication middleware
    +-- server.js         # API entry point
```

## Prerequisites

- Node.js 18 or later
- npm
- A MongoDB database (local MongoDB or MongoDB Atlas)

## Getting started

### 1. Configure the backend

Create a file named `backend/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/blogify
JWT_SECRET=replace-with-a-long-random-secret
```

Use your MongoDB Atlas connection string for `MONGO_URI` if you are not running MongoDB locally. Never commit this file or expose your JWT secret.

Install backend dependencies and start the API:

```bash
cd backend
npm install
npm start
```

The API runs at `http://localhost:5000`.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Available scripts

### Backend

| Command | Description |
| --- | --- |
| `npm start` | Starts the Express server on port 5000 |

### Frontend

| Command | Description |
| --- | --- |
| `npm start` | Runs the React development server |
| `npm test` | Starts the React test runner |
| `npm run build` | Creates an optimized production build |

## API reference

The API base URL is `http://localhost:5000/api`.

### Authentication

| Method | Endpoint | Description | Auth required |
| --- | --- | --- |
| `POST` | `/auth/signup` | Register a user | No |
| `POST` | `/auth/login` | Log in and receive a JWT | No |

Example signup body:

```json
{
  "username": "jane",
  "email": "jane@example.com",
  "password": "your-secure-password"
}
```

Example login body:

```json
{
  "email": "jane@example.com",
  "password": "your-secure-password"
}
```

### Posts

| Method | Endpoint | Description | Auth required |
| --- | --- | --- |
| `GET` | `/posts` | List posts, newest first | No |
| `GET` | `/posts/:id` | Get one post | No |
| `POST` | `/posts` | Create a post | Yes |
| `PUT` | `/posts/:id` | Update your post | Yes |
| `DELETE` | `/posts/:id` | Delete your post | Yes |

Create or update post body:

```json
{
  "title": "My first post",
  "content": "Hello, Blogify!"
}
```

### Comments

| Method | Endpoint | Description | Auth required |
| --- | --- | --- |
| `GET` | `/comments/:postId` | Get comments for a post | No |
| `POST` | `/comments` | Add a comment | Yes |

Add comment body:

```json
{
  "postId": "POST_ID",
  "text": "Great post!"
}
```

For protected endpoints, send the token returned by login in the `Authorization` header:

```http
Authorization: YOUR_JWT_TOKEN
```

## Connecting the frontend to the API

An Axios client is already defined in `frontend/src/api/api.js` with the API base URL and automatic token header support. To make the application fully functional, replace the mock data and `setTimeout` handlers in the page components with requests through that client.

## License

No license has been specified for this project.
