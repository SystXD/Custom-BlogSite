import { MongoDB_URI } from "$env/static/private";
import { sequence } from "@sveltejs/kit/hooks";
import { env } from "$env/dynamic/private";
import { json, type Handle } from "@sveltejs/kit";
import mongoose from "mongoose";
const startTime = performance.now();
import { handle as AuthHandle } from "./lib/server/auth";
const endTime = performance.now();

(() => {
  mongoose
    .connect(MongoDB_URI)
    .then(() => console.log("MongoDB Is connected"))
    .catch((e) => console.error(`Error connecting to MongoDB : ${e}`));
})();

export const ApiAuth: Handle = async ({ event, resolve }) => {
  const headers = event.request.headers.get("Authorization");

  if (event.url.pathname.startsWith("/api")) {
    if (!headers || !headers.includes(env.ApiHeader))
      return json("Unauthorized", { status: 401 });
  }

  return await resolve(event);
};

export const handle = sequence(AuthHandle, ApiAuth);

console.log(`Executed at ${endTime - startTime}ms`);
