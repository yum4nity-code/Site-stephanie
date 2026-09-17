export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (!raw) return "http://localhost:3000";
  return raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
}

export function isIndexableSite() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim();
  if (!explicit) return false;

  try {
    const url = new URL(explicit.startsWith("http") ? explicit : `https://${explicit}`);
    return url.protocol === "https:" && url.hostname !== "example.com" && url.hostname !== "localhost";
  } catch {
    return false;
  }
}
