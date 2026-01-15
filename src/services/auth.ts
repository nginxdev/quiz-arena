import { supabase } from '../lib/supabase';

export const signInWithEmail = async (email: string, password: string) => {
  // meaningful mock for now if no keys
  if (
    process.env.EXPO_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co'
  ) {
    console.log('Mocking auth for', email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { data: { user: { email } }, error: null };
  }
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  if (
    process.env.EXPO_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co'
  ) {
    return { error: null };
  }
  return await supabase.auth.signOut();
};
