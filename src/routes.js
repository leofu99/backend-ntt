import { Router } from "express";
import { getUserByDocument } from "./controller.js";

const appRouter = Router();

appRouter.get("/", getUserByDocument);

export { appRouter };
