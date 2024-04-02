import express from 'express';
import supabase from '../utils/supabase.js';
const router = express.Router();

const checkUser = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("clerk_id", id);

  if (data.length === 0 || error) {
    return false;
  }
  return true;
};

const checkUserInDatabase = async (id, databaseName) => {
  const { data, error } = await supabase
    .from(databaseName)
    .select("*")
    .eq("id", id);

  if (data.length === 0 || error) {
    return false;
  }
  return true;
}

router.get("/", async (res) => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.get("/journals", async (res) => {
  const { data, error } = await supabase.from("journals").select();
  if (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching users" });
    return;
  }
  res.json(data);
});

router.get("/meditations/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("meditations").select().eq("id", id);
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

router.post("/meditations", async (req, res) => {
  const user_id = req.body.user_id;
  const isAuthenticated = await checkUser(user_id);

  // If not in user database, add them to the user database
  if (!isAuthenticated) {
    const { error } = await supabase
      .from("users")
      .insert({ clerk_id: user_id });

    if (error) {
      return res.status(500).json({ error: "Failed to create user." });
    }

    const { errorTwo } = await supabase
      .from("meditations")
      .insert({ id: user_id, meditation_count: 0 });

    if (errorTwo) {
      return res.status(500).json({ error: "Failed to create user." });
    }
  }

  // If not in meditation database, add them to the meditation database
  const isMeditationUser = await checkUserInDatabase(user_id, "meditations");
  if (!isMeditationUser) {
    const { error } = await supabase
      .from("meditations")
      .insert({ id: user_id, meditation_count: 0 });

    if (error) {
      return res.status(500).json({ error: "Failed to create user." });
    }
  }

  // Fetch current session_count
  const { data: users } = await supabase
    .from("meditations")
    .select("meditation_count")
    .eq("id", user_id)
    .single();

  const currentMeditationCount = users.meditation_count;
  const { error: updateError } = await supabase
    .from("meditations")
    .update({ meditation_count: currentMeditationCount + 1 })
    .eq("id", user_id);

  if (updateError) {
    return res.status(500).json({ error: "Failed to update session count." });
  }

  res.status(200).json({ message: "Session count increased successfully." });
});

router.post("/cbt", async (req, res) => {
  const user_id = req.body.user_id;
  // TODO: add user name
  const isAuthenticated = await checkUser(user_id);

  // If not authenticated, add them to the user database
  if (!isAuthenticated) {
    const { error } = await supabase
      .from("users")
      .insert({ clerk_id: user_id });

    if (error) {
      return res.status(500).json({ error: "Failed to create user." });
    }

    const { errorTwo } = await supabase
      .from("meditations")
      .insert({ id: user_id, meditation_count: 0 });

    if (errorTwo) {
      return res.status(500).json({ error: "Failed to create user." });
    }
  }

  // If not in cbt database, add them to the cbt database
  const isCbtUser = await checkUserInDatabase(user_id, "cbt");
  if (!isCbtUser) {
    const { error } = await supabase
      .from("cbt")
      .insert({ id: user_id, session_count: 0 });

    if (error) {
      return res.status(500).json({ error: "Failed to create user." });
    }
  }

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
  const { error: updateError } = await supabase
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