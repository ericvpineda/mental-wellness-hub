import express from 'express';
import supabase from '../utils/supabase.js';
const router = express.Router();

// GET /users
router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

export default router;