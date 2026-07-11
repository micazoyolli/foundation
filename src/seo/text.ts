export const escapeHtml = (value: unknown) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export const escapeXml = (value: unknown) =>
  escapeHtml(value).replaceAll("'", '&apos;');
