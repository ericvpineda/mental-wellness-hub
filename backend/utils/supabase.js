import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

const supabaseUrl = "https://ckgqvaceeldnozoumqzh.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;