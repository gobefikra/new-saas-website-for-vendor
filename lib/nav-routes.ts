/** Primary marketing routes — prefetched so navbar clicks feel instant */
export const PREFETCH_ROUTES = [
  "/",
  "/integrations",
  "/mylinkr",
  "/pricing",
  "/our-story",
  "/blogs",
  "/contact",
] as const;

export function isPrefetchablePath(pathname: string) {
  return PREFETCH_ROUTES.includes(pathname as (typeof PREFETCH_ROUTES)[number]);
}
