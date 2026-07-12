const getDocumentRef = (documentRef) => {
    if (documentRef)
        return documentRef;
    if (typeof document !== 'undefined')
        return document;
    throw new ReferenceError('A document reference is required outside the browser.');
};
export const updateDocumentTitle = (title, documentRef) => {
    getDocumentRef(documentRef).title = title;
};
export const upsertMeta = (selector, attributes, documentRef) => {
    const currentDocument = getDocumentRef(documentRef);
    let element = currentDocument.head.querySelector(selector);
    if (!element) {
        element = currentDocument.createElement('meta');
        currentDocument.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => {
        element?.setAttribute(name, value);
    });
    return element;
};
export const upsertCanonical = (href, documentRef) => {
    const currentDocument = getDocumentRef(documentRef);
    let element = currentDocument.head.querySelector('link[rel="canonical"]');
    if (!element) {
        element = currentDocument.createElement('link');
        element.rel = 'canonical';
        currentDocument.head.appendChild(element);
    }
    element.href = href;
    return element;
};
export const upsertAlternate = (hreflang, href, documentRef) => {
    const currentDocument = getDocumentRef(documentRef);
    let element = currentDocument.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!element) {
        element = currentDocument.createElement('link');
        element.rel = 'alternate';
        element.hreflang = hreflang;
        currentDocument.head.appendChild(element);
    }
    element.href = href;
    return element;
};
