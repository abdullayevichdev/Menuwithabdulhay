let supabaseInstance: any = null;
let initError: string | null = null;

export const supabase = {
  from: () => {
    throw new Error(
      "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
    );
  },
  auth: {
    getUser: async () => {
      throw new Error(
        "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
      );
    },
    signInWithPassword: async () => {
      throw new Error(
        "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
      );
    },
    signOut: async () => {
      throw new Error(
        "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
      );
    },
  },
  channel: () => {
    throw new Error(
      "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
    );
  },
  removeChannel: async () => {
    throw new Error(
      "Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
    );
  },
} as any;

export async function initializeSupabase() {
  if (supabaseInstance) return supabaseInstance;
  if (initError) throw new Error(initError);

  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      initError =
        "Supabase URL or Anon Key not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.";
      throw new Error(initError);
    }

    const { createClient } = await import("@supabase/supabase-js");
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);

    // Replace the placeholder with the real instance
    Object.assign(supabase, supabaseInstance);

    return supabaseInstance;
  } catch (error) {
    console.error("Failed to initialize Supabase:", error);
    throw error;
  }
}

// Try to initialize on import if credentials are available
if (
  import.meta.env.VITE_SUPABASE_URL &&
  import.meta.env.VITE_SUPABASE_ANON_KEY
) {
  initializeSupabase().catch((err) => {
    console.warn("Supabase initialization failed:", err.message);
  });
}
