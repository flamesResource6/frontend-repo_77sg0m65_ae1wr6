# Adewale (sneeakydev) — Backend Engineer Portfolio

This is a modern, dark-mode portfolio for Abdulrahman Adegeye (Adewale), built with Vite + React + Tailwind on the frontend and FastAPI on the backend. It includes:

- Hero with Spline 3D cover
- About, Projects, Experience, Contact
- Now Playing widget (Spotify)
- /api/projects JSON endpoint with MongoDB persistence
- Minimal admin editor for portfolio items (token-protected)

## Environment

Create `.env` files for both services using the following template.

### Frontend .env.example

```
VITE_BACKEND_URL=http://localhost:8000
```

### Backend .env.example

```
PORT=8000
DATABASE_URL=mongodb://localhost:27017
DATABASE_NAME=portfolio
ADMIN_TOKEN=change-this-token

# Optional Spotify integration
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

## Scripts

- Frontend: `npm run dev`
- Backend: `uvicorn main:app --reload --port 8000`

## Notes

- Admin endpoints require `Authorization: Bearer <ADMIN_TOKEN>` header.
- The projects collection is seeded on first run if empty.
