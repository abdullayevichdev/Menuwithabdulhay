let supabaseInstance: any = null;

export const getSupabase = async () => {
  if (supabaseInstance) return supabaseInstance;

  const { createClient } = await import('@supabase/supabase-js');

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// Export a promise that resolves to the supabase client
export const supabase = getSupabase();
