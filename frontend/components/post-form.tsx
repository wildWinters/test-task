'use client';

import { useState } from 'react';
import { createPost } from '@/app/server/actions/cratePost';

export function PostForm() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await createPost(formData);

    if (res.success) setMessage('✅ Пост створено!');
    else setMessage(`❌ ${res.error}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto mt-10 border p-6 rounded-xl"
    >
      <input name="title" placeholder="Заголовок" className="border p-2 rounded" />
      <textarea
        name="content"
        placeholder="Контент"
        className="border p-2 rounded h-24"
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Створити пост
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
