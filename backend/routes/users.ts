import express, { Request, Response, Router } from "express";
import supabase from "../utils/supabase.js";

const router: Router = express.Router();

const checkUser = async (id: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("clerk_id", id);

  if (error || !data || data.length === 0) {
    return false;
  }
  return true;
};

const checkUserInDatabase = async (
  id: string,
  databaseName: string
): Promise<boolean> => {
  const { data, error } = await supabase
    .from(databaseName)
    .select("*")
    .eq("id", id);

  if (error || !data || data.length === 0) {
    return false;
  }
  return true;
};

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase.from("users").select();
    if (error) {
      throw error;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

router.get("/journals", async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase.from("journals").select();
    if (error) {
      throw error;
    }
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching journals" });
  }
});

router.get(
  "/meditations/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const { data, error } = await supabase
        .from("meditations")
        .select()
        .eq("id", id);
      if (error) {
        throw error;
      }
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching meditations" });
    }
  }
);

router.get("/cbt/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase.from("cbt").select().eq("id", id);
    if (error) {
      throw error;
    }
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching cbt sessions" });
  }
});

router.post(
  "/meditations",
  async (req: Request, res: Response): Promise<void> => {
    const { user_id, user_firstName } = req.body;
    try {
      const isAuthenticated = await checkUser(user_id);

      if (!isAuthenticated) {
        await supabase
          .from("users")
          .insert({ clerk_id: user_id, firstName: user_firstName });
        await supabase
          .from("meditations")
          .insert({ id: user_id, meditation_count: 0 });
      }

      const isMeditationUser = await checkUserInDatabase(
        user_id,
        "meditations"
      );
      if (!isMeditationUser) {
        await supabase
          .from("meditations")
          .insert({ id: user_id, meditation_count: 0 });
      }

      const { data } = await supabase
        .from("meditations")
        .select("meditation_count")
        .eq("id", user_id)
        .single();
      const currentMeditationCount = data?.meditation_count || 0;

      await supabase
        .from("meditations")
        .update({ meditation_count: currentMeditationCount + 1 })
        .eq("id", user_id);

      res
        .status(200)
        .json({ message: "Session count increased successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while processing the request." });
    }
  }
);

router.post("/cbt", async (req: Request, res: Response): Promise<void> => {
  const { user_id, user_firstName } = req.body;
  try {
    const isAuthenticated = await checkUser(user_id);

    if (!isAuthenticated) {
      await supabase
        .from("users")
        .insert({ clerk_id: user_id, firstName: user_firstName });
      await supabase
        .from("meditations")
        .insert({ id: user_id, meditation_count: 0 });
    }

    const isCbtUser = await checkUserInDatabase(user_id, "cbt");
    if (!isCbtUser) {
      await supabase.from("cbt").insert({ id: user_id, session_count: 0 });
    }

    const { data, error } = await supabase
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

    await supabase
      .from("cbt")
      .update({ session_count: currentSessionCount + 1 })
      .eq("id", user_id);

    res.status(200).json({ message: "Session count increased successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

export default router;
