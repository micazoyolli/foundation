export type SitemapEntry = {
    changefreq?: string;
    lastmod?: string;
    loc: string;
    priority?: string;
};
export type SitemapOptions = {
    lastmod?: string;
};
export declare const buildSitemapXml: (entries: readonly SitemapEntry[], options?: SitemapOptions) => string;
