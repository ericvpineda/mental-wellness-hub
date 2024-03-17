import { query } from "../convex/_generated/server.js";

// ----- Journals Database functions -----

// GET 
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("journals").collect();
  },
});