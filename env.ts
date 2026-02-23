import path from "node:path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

const DEFAULTS: Record<string, string> = {
  BASE_URL: "https://n10s.net",
};

export function env(name: string, defaultValue?: string): string {
  const value = process.env[name]?.trim() ?? defaultValue ?? DEFAULTS[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

export function optionalEnv(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}
