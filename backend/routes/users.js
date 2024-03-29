import express from 'express';
import supabase from '../utils/supabase.js';
const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.get("/journals", async (req, res) => {
  const { data, error } = await supabase.from("journals").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.get("/meditations", async (req, res) => {
  const { data, error } = await supabase.from("meditations").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.get("/cbt/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("cbt").select().eq("id", id);
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.post("/cbt", async (req, res) => {
  console.log("Should increase");
  const user_id = req.body.user_id;

  // Fetch current session_count
  const { data: users, error } = await supabase
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
  const { data, error: updateError } = await supabase
    .from("cbt")
    .update({ session_count: currentSessionCount + 1 })
    .eq("id", user_id);

  if (updateError) {
    // Handle update error
    return res.status(500).json({ error: "Failed to update session count." });
  }

  res.status(200).json({ message: "Session count increased successfully." });
});



export default router;