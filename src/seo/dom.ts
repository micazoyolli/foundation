export type MetaAttributes = {
  content: string;
  name?: string;
  property?: string;
};

export const updateDocumentTitle = (
  title: string,
  documentRef: Document = document,
) => {
  documentRef.title = title;
};

export const upsertMeta = (
  selector: string,
  attributes: MetaAttributes,
  documentRef: Document = document,
) => {
  let element = documentRef.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = documentRef.createElement('meta');
    documentRef.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element?.setAttribute(name, value);
  });

  return element;
};

export const upsertCanonical = (
  href: string,
  documentRef: Document = document,
) => {
  let element = documentRef.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = documentRef.createElement('link');
    element.rel = 'canonical';
    documentRef.head.appendChild(element);
  }

  element.href = href;

  return element;
};

export const upsertAlternate = (
  hreflang: string,
  href: string,
  documentRef: Document = document,
) => {
  let element = documentRef.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );

  if (!element) {
    element = documentRef.createElement('link');
    element.rel = 'alternate';
    element.hreflang = hreflang;
    documentRef.head.appendChild(element);
  }

  element.href = href;

  return element;
};
