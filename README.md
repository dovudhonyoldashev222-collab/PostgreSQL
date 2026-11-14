# PostgreSQL

REST API built with Express, Sequelize, and PostgreSQL. Swagger documentation is available at `/api-docs`.

## Run locally

1. Install dependencies with `npm install`.
2. Create a local `.env` file with your database settings:

   ```env
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=
   DB_HOST=localhost
   DB_PORT=5432
   PORT=3000
   ```

3. Start the server with `npm run dev`.
4. Open `http://localhost:3000/api-docs/` to explore the API.

Run `npm test` to verify the models, database tables, relations, and API endpoints.
