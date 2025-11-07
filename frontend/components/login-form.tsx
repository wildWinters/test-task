'use client';

import { useState } from 'react';
import { authorizeUser } from '@/app/server/actions/authorizeUser';

type AuthResponse = {
  success: boolean;
  user?: { name: string };
  error?: string;
};

export function LoginForm({ onLogin }: { onLogin: (name: string) => void }) {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = (await authorizeUser(formData)) as AuthResponse;

    if (res.success && res.user?.name) {
      onLogin(res.user.name);
    } else {
      setError(res.error ?? 'Помилка авторизації');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-sm mx-auto mt-20 border p-6 rounded-2xl shadow-lg"
    >
      <input
        name="username"
        placeholder="Логін"
        className="border rounded p-2"
        required
        autoComplete="username"
      />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        className="border rounded p-2"
        required
        autoComplete="current-password"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
      >
        Увійти
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
