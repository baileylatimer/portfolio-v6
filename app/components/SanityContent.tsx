import { useEffect, useState } from 'react';
import { client } from '~/lib/sanity';

export default function SanityContent() {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Replace this query with your actual Sanity query
        const result = await client.fetch('*[_type == "sampleContent"][0].text');
        setContent(result);
      } catch (error) {
        console.error('Error fetching content from Sanity:', error);
      }
    }

    fetchContent();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Content from Sanity</h2>
      {content ? (
        <p className="text-gray-700">{content}</p>
      ) : (
        <p className="text-gray-500">Loading content...</p>
      )}
    </div>
  );
}
