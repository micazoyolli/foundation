export type CanonicalUrlOptions = {
  rootTrailingSlash?: boolean;
  trailingSlash?: boolean;
};

export const normalizeBaseUrl = (baseUrl: string) =>
  baseUrl.replace(/\/+$/, '');

export const normalizeRoutePath = (routePath: string) => {
  const path = routePath.trim();

  if (!path || path === '/') return '/';

  return `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};

export const isAbsoluteUrl = (value: string) =>
  /^https?:\/\//i.test(value);

export const getCanonicalUrl = (
  baseUrl: string,
  routePath: string,
  options: CanonicalUrlOptions = {},
) => {
  const base = normalizeBaseUrl(baseUrl);
  const path = normalizeRoutePath(routePath);

  if (path === '/') {
    return options.rootTrailingSlash ? `${base}/` : base;
  }

  const canonical = `${base}${path}`;

  return options.trailingSlash ? `${canonical}/` : canonical;
};

export const getAbsoluteUrl = (
  value: string,
  baseUrl: string,
  options: CanonicalUrlOptions = {},
) => (isAbsoluteUrl(value) ? value : getCanonicalUrl(baseUrl, value, options));
