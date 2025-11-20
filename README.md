# ToDo App (Laravel MVC + Frontend SPA)
A take-home assessment skeleton implementing a ToDo application using Laravel-style MVC structure for backend, MySQL (todo_db), and a vanilla JS frontend SPA.

**Important:** This repository is a scaffold and includes all necessary files, Docker configs, and a Postman collection. To run a fully working Laravel app, you will need Docker and an internet connection to pull PHP & Composer images and install dependencies.

## What is included
- `backend/` - Laravel-style MVC skeleton (controllers, models, routes, migration)
- `frontend/` - Single page app (HTML, CSS, vanilla JS)
- `docker-compose.yml` - Services: php-app (Laravel), mysql, nginx (optional)
- `Dockerfile.backend` - For building PHP/Laravel app container
- `postman_collection.json` - Postman collection for all APIs
- `tests/` - Example PHPUnit test skeletons
- `todo_app.zip` - This archive (generated)

## Database
- MySQL database name: `todo_db`
- Migration provided: `database/migrations/2025_11_18_create_tasks_table.php`
- Example .env configured to use `todo_db`

## APIs (as scaffolded)
- `GET /api/tasks` - returns latest 5 non-completed tasks
- `POST /api/tasks` - create a new task (body: title, description)
- `POST /api/tasks/{id}/complete` - marks a task as completed

## How to run (recommended)
1. Ensure Docker and docker-compose are installed.
2. From repo root:
   ```bash
   docker-compose up --build
   ```
3. Enter backend container to install composer deps and run migrations:
   ```bash
   docker-compose exec php-app bash
   composer install
   php artisan migrate
   php artisan serve --host=0.0.0.0 --port=8000
   ```
4. Open `frontend/index.html` (or serve via nginx configured).

## Notes
- This is a complete scaffold with meaningful comments. To make it fully functional, run Composer inside the PHP container to install Laravel and run migrations.
- Postman collection `postman_collection.json` contains example requests.

