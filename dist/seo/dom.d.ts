export type MetaAttributes = {
    content: string;
    name?: string;
    property?: string;
};
export declare const updateDocumentTitle: (title: string, documentRef?: Document) => void;
export declare const upsertMeta: (selector: string, attributes: MetaAttributes, documentRef?: Document) => HTMLMetaElement;
export declare const upsertCanonical: (href: string, documentRef?: Document) => HTMLLinkElement;
export declare const upsertAlternate: (hreflang: string, href: string, documentRef?: Document) => HTMLLinkElement;
