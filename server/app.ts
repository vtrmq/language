import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { cors } from "hono/cors";
import { logger } from 'hono/logger'
import expensesRoute from './routes/expenses.route.ts';

const app = new Hono();

// Detecta entorno
const isDev = process.env.NODE_ENV === "development";
// Dominios permitidos en producción
const allowedOrigins = [
  "https://localschool.online",
  "https://www.localschool.online"
];

// Middleware global de CORS
app.use(
  cors({
    origin: (origin) => {
      if (!origin) return "*";
      if (isDev) return "*"; // en desarrollo: todo permitido
      return allowedOrigins.includes(origin) ? origin : null;
    },
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Middleware opcional: logs, etc.
app.use(logger());

// API: Expenses
app.route("/api/expenses", expensesRoute);

// Servir archivos estáticos compilados de Svelte
app.use('/*', serveStatic({ root: '../app/dist' }));

export default app;
