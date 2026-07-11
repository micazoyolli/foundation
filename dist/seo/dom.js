export const updateDocumentTitle = (title, documentRef = document) => {
    documentRef.title = title;
};
export const upsertMeta = (selector, attributes, documentRef = document) => {
    let element = documentRef.head.querySelector(selector);
    if (!element) {
        element = documentRef.createElement('meta');
        documentRef.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => {
        element?.setAttribute(name, value);
    });
    return element;
};
export const upsertCanonical = (href, documentRef = document) => {
    let element = documentRef.head.querySelector('link[rel="canonical"]');
    if (!element) {
        element = documentRef.createElement('link');
        element.rel = 'canonical';
        documentRef.head.appendChild(element);
    }
    element.href = href;
    return element;
};
export const upsertAlternate = (hreflang, href, documentRef = document) => {
    let element = documentRef.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!element) {
        element = documentRef.createElement('link');
        element.rel = 'alternate';
        element.hreflang = hreflang;
        documentRef.head.appendChild(element);
    }
    element.href = href;
    return element;
};
