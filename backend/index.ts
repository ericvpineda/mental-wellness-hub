import express, { Express } from "express";
import cors from "cors";
import chatRoutes from "./routes/kelvinAI.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/api/chat", chatRoutes);
app.use("/api/users", userRoutes)

const PORT: number = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});