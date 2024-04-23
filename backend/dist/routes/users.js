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
import supabase from '../utils/supabase.js';
const router = express.Router();
const checkUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase
        .from("users")
        .select("*")
        .eq("clerk_id", id);
    if (data.length === 0 || error) {
        return false;
    }
    return true;
});
const checkUserInDatabase = (id, databaseName) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase
        .from(databaseName)
        .select("*")
        .eq("id", id);
    if (data.length === 0 || error) {
        return false;
    }
    return true;
});
// Important: Need request and response objects for async function 
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.from("users").select();
    if (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
        return;
    }
    res.status(200).json(data);
}));
router.get("/journals", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.from("journals").select();
    if (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
        return;
    }
    res.status(200).json(data);
}));
router.get("/meditations/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, error } = yield supabase.from("meditations").select().eq("id", id);
    if (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
        return;
    }
    res.status(200).json(data);
}));
router.get("/cbt/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, error } = yield supabase.from("cbt").select().eq("id", id);
    if (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
        return;
    }
    res.status(200).json(data);
}));
router.post("/meditations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.body.user_id;
    const user_firstName = req.body.user_firstName;
    const isAuthenticated = yield checkUser(user_id);
    // If not in user database, add them to the user database
    if (!isAuthenticated) {
        const { error } = yield supabase
            .from("users")
            .insert({ clerk_id: user_id, firstName: user_firstName });
        if (error) {
            return res.status(500).json({ error: "Failed to create user." });
        }
        const { errorTwo } = yield supabase
            .from("meditations")
            .insert({ id: user_id, meditation_count: 0 });
        if (errorTwo) {
            return res.status(500).json({ error: "Failed to create user." });
        }
    }
    // If not in meditation database, add them to the meditation database
    const isMeditationUser = yield checkUserInDatabase(user_id, "meditations");
    if (!isMeditationUser) {
        const { error } = yield supabase
            .from("meditations")
            .insert({ id: user_id, meditation_count: 0 });
        if (error) {
            return res.status(500).json({ error: "Failed to create user." });
        }
    }
    // Fetch current session_count
    const { data: users } = yield supabase
        .from("meditations")
        .select("meditation_count")
        .eq("id", user_id)
        .single();
    const currentMeditationCount = users.meditation_count;
    const { error: updateError } = yield supabase
        .from("meditations")
        .update({ meditation_count: currentMeditationCount + 1 })
        .eq("id", user_id);
    if (updateError) {
        return res.status(500).json({ error: "Failed to update session count." });
    }
    res.status(200).json({ message: "Session count increased successfully." });
}));
router.post("/cbt", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.body.user_id;
    const user_firstName = req.body.user_firstName;
    const isAuthenticated = yield checkUser(user_id);
    // If not authenticated, add them to the user database
    if (!isAuthenticated) {
        const { error } = yield supabase
            .from("users")
            .insert({ clerk_id: user_id, firstName: user_firstName });
        if (error) {
            return res.status(500).json({ error: "Failed to create user." });
        }
        const { errorTwo } = yield supabase
            .from("meditations")
            .insert({ id: user_id, meditation_count: 0 });
        if (errorTwo) {
            return res.status(500).json({ error: "Failed to create user." });
        }
    }
    // If not in cbt database, add them to the cbt database
    const isCbtUser = yield checkUserInDatabase(user_id, "cbt");
    if (!isCbtUser) {
        const { error } = yield supabase
            .from("cbt")
            .insert({ id: user_id, session_count: 0 });
        if (error) {
            return res.status(500).json({ error: "Failed to create user." });
        }
    }
    // Fetch current session_count
    const { data: users, error } = yield supabase
        .from("cbt")
        .select("session_count")
        .eq("id", user_id)
        .single();
    if (error) {
        // Handle error
        return res.status(500).json({ error: "Failed to fetch user data." });
    }
    if (!users) {
        return res.status(404).json({ error: "User not found." });
    }
    const currentSessionCount = users.session_count;
    // Increment session_count and update in the database
    const { error: updateError } = yield supabase
        .from("cbt")
        .update({ session_count: currentSessionCount + 1 })
        .eq("id", user_id);
    if (updateError) {
        // Handle update error
        return res.status(500).json({ error: "Failed to update session count." });
    }
    res.status(200).json({ message: "Session count increased successfully." });
}));
export default router;
