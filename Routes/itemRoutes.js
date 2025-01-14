// routes/itemRoutes.js
import { Router } from "express";
const router = Router();
import { fetchAllItems } from "../Controllers/itemController.js";

router.get("/items", fetchAllItems);

export default router;
