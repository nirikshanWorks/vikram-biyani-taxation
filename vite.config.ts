import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

// Load .env variables into process.env if they are not already set
try {
  const envPath = path.resolve(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split("\n").forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || "";
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.error("Error loading .env file in vite.config.ts:", e);
}

// Vite plugin to serve the /api folder in development
function viteVercelApiPlugin() {
  return {
    name: "vite-vercel-api",
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url?.startsWith("/api/")) {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const functionName = url.pathname.replace("/api/", "");
          const filePath = path.resolve(__dirname, `api/${functionName}.ts`);

          if (fs.existsSync(filePath)) {
            try {
              // Parse body if it's a POST request
              let body = {};
              if (req.method === "POST") {
                const buffers = [];
                for await (const chunk of req) {
                  buffers.push(chunk);
                }
                const data = Buffer.concat(buffers).toString();
                if (data) {
                  try {
                    body = JSON.parse(data);
                  } catch (e) {
                    body = data;
                  }
                }
              }

              // Create mock VercelRequest and VercelResponse
              const vercelReq = Object.assign(req, {
                body,
                query: Object.fromEntries(url.searchParams),
              });

              // Mock res methods
              const vercelRes = Object.assign(res, {
                status(statusCode: number) {
                  res.statusCode = statusCode;
                  return vercelRes;
                },
                json(data: any) {
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(data));
                  return vercelRes;
                },
                send(data: any) {
                  res.end(data);
                  return vercelRes;
                },
              });

              // Dynamically load the TypeScript file (using Vite's ssrLoadModule so it transpiles TS!)
              const module = await server.ssrLoadModule(filePath);
              const handler = module.default;

              if (typeof handler === "function") {
                await handler(vercelReq, vercelRes);
                return;
              }
            } catch (err: any) {
              console.error(`Error in API route ${functionName}:`, err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: `Internal Server Error: ${err.message}` }));
              return;
            }
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
    viteVercelApiPlugin(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
