'use client';

import { useEffect, useState } from 'react';

export function PostsList() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/posts`);
      const data = await res.json();
      setPosts(data.docs || []);
    })();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Пости</h2>
      {posts.map((p) => (
        <div key={p.id} className="border rounded p-3 mb-2">
          <h3 className="font-semibold">{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
