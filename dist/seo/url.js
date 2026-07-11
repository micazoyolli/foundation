export const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/+$/, '');
export const normalizeRoutePath = (routePath) => {
    const path = routePath.trim();
    if (!path || path === '/')
        return '/';
    return `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};
export const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);
export const getCanonicalUrl = (baseUrl, routePath, options = {}) => {
    const base = normalizeBaseUrl(baseUrl);
    const path = normalizeRoutePath(routePath);
    if (path === '/') {
        return options.rootTrailingSlash ? `${base}/` : base;
    }
    const canonical = `${base}${path}`;
    return options.trailingSlash ? `${canonical}/` : canonical;
};
export const getAbsoluteUrl = (value, baseUrl, options = {}) => (isAbsoluteUrl(value) ? value : getCanonicalUrl(baseUrl, value, options));
