# AI Skills Catalog

Fullstack project with **Express + MongoDB** (backend) and **Angular** (frontend).

## Structure

```
fullstack-app/
├── backend/          # REST API (Express + Mongoose)
├── frontend/         # SPA (Angular 19)
├── docker-compose.yml
└── package.json      # Scripts for joint development
```

## Requirements

- Node.js 20+
- Docker (optional, for local MongoDB)

## Quick start

### 1. MongoDB

With Docker:

```bash
npm run docker:db
```

Or use a local instance at `mongodb://localhost:27017`.

### 2. Environment variables (backend)

```bash
cp backend/.env.example backend/.env
```

### 3. Install dependencies

```bash
npm run install:all
```

### 4. Development (API + frontend)

```bash
npm run dev
```

- API: http://localhost:3000
- Frontend: http://localhost:4200 (proxies `/api` → backend)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Backend + frontend in parallel |
| `npm run dev:api` | API only |
| `npm run dev:web` | Angular only |
| `npm run docker:db` | Start MongoDB in Docker |

## API

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/items` | List items |
| GET | `/api/items/:id` | Get item |
| POST | `/api/items` | Create item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

Example body for create:

```json
{
  "title": "My task",
  "description": "Optional",
  "completed": false
}
```
