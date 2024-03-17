import express from 'express';
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const router = express.Router();
const client = new ConvexHttpClient(process.env["CONVEX_URL"]);

// ----- Journal Routes ------ 

// Get all journal entries
router.get('/', (req, res) => {
  const allJournals = client.query(api.journals.get);
  res.send(allJournals);
});

// Get specific journal entry
router.get('/:id', (req, res) => {
    res.send('GET /users/:id route, parameterized user information will display here');
});


export default router;