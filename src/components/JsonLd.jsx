/**
 * JsonLd.jsx
 * Reusable component to inject JSON-LD structured data (schema.org) into page <head>.
 * Usage: <JsonLd data={schemaObject} />
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
