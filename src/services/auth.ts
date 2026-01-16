import { supabase } from '../lib/supabase';

export const signInWithEmail = async (email: string, password: string) => {
  // meaningful mock for now if no keys
  if (
    process.env.EXPO_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co'
  ) {
    console.log('Mocking auth for', email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { data: { user: { email }, session: null }, error: null };
  }
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signUpWithEmail = async (email: string, password: string) => {
  if (
    process.env.EXPO_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co'
  ) {
    console.log('Mocking signup for', email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { data: { user: { email }, session: null }, error: null };
  }
  return await supabase.auth.signUp({
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
