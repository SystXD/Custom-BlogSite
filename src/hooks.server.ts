import { MongoDB_URI } from "$env/static/private";
import mongoose from "mongoose";
export { handle } from "./lib/server/auth";

(() => {
  mongoose
    .connect(MongoDB_URI)
    .then(() => console.log("MongoDB Is connected"))
    .catch((e) => console.error(`Error connecting to MongoDB : ${e}`));
})();
