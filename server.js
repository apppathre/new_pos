import express, { json } from "express";
const app = express();
import itemRoutes from "./Routes/itemRoutes.js";
import cors from "cors"; // Changed import to require
import { config } from "dotenv"; // Changed import to require

config();
app.use(cors());

app.use(json());
app.use("/api", itemRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
