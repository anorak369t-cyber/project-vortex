export const integrationStatus={
 supabase:Boolean(import.meta.env.VITE_SUPABASE_URL&&import.meta.env.VITE_SUPABASE_ANON_KEY),
 ai:Boolean(import.meta.env.VITE_GEMINI_API_KEY),
 contact:Boolean(import.meta.env.VITE_CONTACT_ENDPOINT)
};
export function requireEnv(name){const value=import.meta.env[name];if(!value)throw new Error(`Missing integration environment variable: ${name}`);return value}
