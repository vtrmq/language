
import { existsSync } from "fs";
import app from './app';

// Puerto configurable por variable de entorno o 3000 por defecto
const port = Number(process.env.PORT) || 10000;

// Rutas a los certificados locales (solo para entorno local)
//const certPath = "./certs/localhost.crt";
//const keyPath = "./certs/localhost.key";

// Verifica si los certificados existen
// const hasCerts = existsSync(certPath) && existsSync(keyPath);

// Configuración del servidor Bun
const server = Bun.serve({
  port,
  fetch: app.fetch,
  hostname: "0.0.0.0",
} as any);

/*
  ...(hasCerts
    ? {
      certFile: certPath, // Si existen, activa HTTPS
      keyFile: keyPath,
    }
    : {}), // Si no existen, usa HTTP automáticamente
*/

console.log("------------------------------------------------");
console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
//console.log(`TLS: ${hasCerts ? "Enabled (HTTPS)" : "Disabled (HTTP)"}`);
console.log(`Listening on ${server.url}`);
console.log("------------------------------------------------");



