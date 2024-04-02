import express from "express";
import cors from "cors";
import kelvinAI from "./routes/kelvinAI.js";
import users from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/chat", kelvinAI);
app.use("/api/users", users)

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//test