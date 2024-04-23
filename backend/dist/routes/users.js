var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import supabase from "../utils/supabase.js";
const router = express.Router();
const checkUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase
        .from("users")
        .select("*")
        .eq("clerk_id", id);
    if (error || !data || data.length === 0) {
        return false;
    }
    return true;
});
const checkUserInDatabase = (id, databaseName) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase
        .from(databaseName)
        .select("*")
        .eq("id", id);
    if (error || !data || data.length === 0) {
        return false;
    }
    return true;
});
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase.from("users").select();
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
    }
}));
router.get("/journals", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase.from("journals").select();
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while fetching journals" });
    }
}));
router.get("/meditations/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { data, error } = yield supabase
            .from("meditations")
            .select()
            .eq("id", id);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while fetching meditations" });
    }
}));
router.get("/cbt/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { data, error } = yield supabase.from("cbt").select().eq("id", id);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while fetching cbt sessions" });
    }
}));
router.post("/meditations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, user_firstName } = req.body;
    try {
        const isAuthenticated = yield checkUser(user_id);
        if (!isAuthenticated) {
            yield supabase
                .from("users")
                .insert({ clerk_id: user_id, firstName: user_firstName });
            yield supabase
                .from("meditations")
                .insert({ id: user_id, meditation_count: 0 });
        }
        const isMeditationUser = yield checkUserInDatabase(user_id, "meditations");
        if (!isMeditationUser) {
            yield supabase
                .from("meditations")
                .insert({ id: user_id, meditation_count: 0 });
        }
        const { data } = yield supabase
            .from("meditations")
            .select("meditation_count")
            .eq("id", user_id)
            .single();
        const currentMeditationCount = (data === null || data === void 0 ? void 0 : data.meditation_count) || 0;
        yield supabase
            .from("meditations")
            .update({ meditation_count: currentMeditationCount + 1 })
            .eq("id", user_id);
        res
            .status(200)
            .json({ message: "Session count increased successfully." });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while processing the request." });
    }
}));
router.post("/cbt", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, user_firstName } = req.body;
    try {
        const isAuthenticated = yield checkUser(user_id);
        if (!isAuthenticated) {
            yield supabase
                .from("users")
                .insert({ clerk_id: user_id, firstName: user_firstName });
            yield supabase
                .from("meditations")
                .insert({ id: user_id, meditation_count: 0 });
        }
        const isCbtUser = yield checkUserInDatabase(user_id, "cbt");
        if (!isCbtUser) {
            yield supabase.from("cbt").insert({ id: user_id, session_count: 0 });
        }
        const { data, error } = yield supabase
            .from("cbt")
            .select("session_count")
            .eq("id", user_id)
            .single();
        if (error) {
            throw error;
        }
        if (!data) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        const currentSessionCount = data.session_count;
        yield supabase
            .from("cbt")
            .update({ session_count: currentSessionCount + 1 })
            .eq("id", user_id);
        res.status(200).json({ message: "Session count increased successfully." });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while processing the request." });
    }
}));
export default router;
