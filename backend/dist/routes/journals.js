var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
const router = express.Router();
const client = new ConvexHttpClient(process.env["CONVEX_URL"]);
// ----- Journal Routes ------ 
// Get all journal entries
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allJournals = yield client.query(api.journals.get);
    res.status(200).send(allJournals);
}));
// Get specific journal entry
router.get('/:id', (req, res) => {
    res.send('GET /users/:id route, parameterized user information will display here');
});
export default router;
