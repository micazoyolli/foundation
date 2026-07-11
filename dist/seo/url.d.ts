export type CanonicalUrlOptions = {
    rootTrailingSlash?: boolean;
    trailingSlash?: boolean;
};
export declare const normalizeBaseUrl: (baseUrl: string) => string;
export declare const normalizeRoutePath: (routePath: string) => string;
export declare const isAbsoluteUrl: (value: string) => boolean;
export declare const getCanonicalUrl: (baseUrl: string, routePath: string, options?: CanonicalUrlOptions) => string;
export declare const getAbsoluteUrl: (value: string, baseUrl: string, options?: CanonicalUrlOptions) => string;
