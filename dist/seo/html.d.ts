export type HtmlMetadata = {
    canonical?: string;
    description?: string;
    image?: string;
    lang?: string;
    ogImageHeight?: number | string;
    ogImageWidth?: number | string;
    robots?: string;
    siteName?: string;
    title?: string;
    twitterCard?: string;
};
export type AlternateLink = {
    href: string;
    hreflang: string;
};
export declare const upsertMetaTag: (html: string, selector: string, tag: string) => string;
export declare const upsertLinkTag: (html: string, selector: string, tag: string) => string;
export declare const removeAlternateLinks: (html: string) => string;
export declare const getAlternateLinkTags: (alternates: readonly AlternateLink[]) => string;
export declare const applyHtmlMetadata: (html: string, metadata: HtmlMetadata, alternates?: readonly AlternateLink[]) => string;
export declare const getStaticRouteOutputPath: (routePath: string) => string;
