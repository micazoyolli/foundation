import assert from 'node:assert/strict';
import test from 'node:test';
import {
  updateDocumentTitle,
  upsertAlternate,
  upsertCanonical,
  upsertMeta,
} from '../dist/index.js';

class FakeElement {
  attributes = new Map();
  href = '';
  hreflang = '';
  rel = '';

  constructor(tagName) {
    this.tagName = tagName;
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
    this[name] = value;
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }
}

class FakeHead {
  children = [];

  appendChild(element) {
    this.children.push(element);
    return element;
  }

  querySelector(selector) {
    if (selector === 'meta[name="description"]') {
      return this.children.find((child) => child.tagName === 'meta' && child.getAttribute('name') === 'description') ?? null;
    }

    if (selector === 'link[rel="canonical"]') {
      return this.children.find((child) => child.tagName === 'link' && child.rel === 'canonical') ?? null;
    }

    const alternateMatch = selector.match(/^link\[rel="alternate"\]\[hreflang="(.+)"\]$/);
    if (alternateMatch) {
      return this.children.find((child) => (
        child.tagName === 'link'
        && child.rel === 'alternate'
        && child.hreflang === alternateMatch[1]
      )) ?? null;
    }

    return null;
  }
}

const createDocument = () => ({
  title: '',
  head: new FakeHead(),
  createElement: (tagName) => new FakeElement(tagName),
});

test('updates document title', () => {
  const documentRef = createDocument();

  updateDocumentTitle('Nueva pagina', documentRef);

  assert.equal(documentRef.title, 'Nueva pagina');
});

test('upserts meta tags', () => {
  const documentRef = createDocument();

  const first = upsertMeta('meta[name="description"]', {
    name: 'description',
    content: 'Descripcion inicial',
  }, documentRef);
  const second = upsertMeta('meta[name="description"]', {
    name: 'description',
    content: 'Descripcion actualizada',
  }, documentRef);

  assert.equal(first, second);
  assert.equal(documentRef.head.children.length, 1);
  assert.equal(second.getAttribute('content'), 'Descripcion actualizada');
});

test('upserts canonical and alternate links', () => {
  const documentRef = createDocument();

  const canonical = upsertCanonical('https://example.com/contacto', documentRef);
  const alternate = upsertAlternate('en', 'https://example.com/en/contact', documentRef);
  const updatedAlternate = upsertAlternate('en', 'https://example.com/en/contact-us', documentRef);

  assert.equal(canonical.rel, 'canonical');
  assert.equal(canonical.href, 'https://example.com/contacto');
  assert.equal(alternate, updatedAlternate);
  assert.equal(updatedAlternate.rel, 'alternate');
  assert.equal(updatedAlternate.hreflang, 'en');
  assert.equal(updatedAlternate.href, 'https://example.com/en/contact-us');
});
