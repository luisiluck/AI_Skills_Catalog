# Fullstack App

Proyecto fullstack con **Express + MongoDB** (backend) y **Angular** (frontend).

## Estructura

```
fullstack-app/
├── backend/          # API REST (Express + Mongoose)
├── frontend/         # SPA (Angular 19)
├── docker-compose.yml
└── package.json      # Scripts para desarrollo conjunto
```

## Requisitos

- Node.js 20+
- Docker (opcional, para MongoDB local)

## Inicio rápido

### 1. MongoDB

Con Docker:

```bash
npm run docker:db
```

O usa una instancia local en `mongodb://localhost:27017`.

### 2. Variables de entorno (backend)

```bash
cp backend/.env.example backend/.env
```

### 3. Instalar dependencias

```bash
npm run install:all
```

### 4. Desarrollo (API + frontend)

```bash
npm run dev
```

- API: http://localhost:3000
- Frontend: http://localhost:4200 (proxy `/api` → backend)

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Backend + frontend en paralelo |
| `npm run dev:api` | Solo API |
| `npm run dev:web` | Solo Angular |
| `npm run docker:db` | Levanta MongoDB en Docker |

## API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/items` | Listar items |
| GET | `/api/items/:id` | Obtener item |
| POST | `/api/items` | Crear item |
| PUT | `/api/items/:id` | Actualizar item |
| DELETE | `/api/items/:id` | Eliminar item |

Ejemplo de body para crear:

```json
{
  "title": "Mi tarea",
  "description": "Opcional",
  "completed": false
}
```
