'use client';

import { useState } from 'react';
import { LoginForm } from '@/components/login-form';
import { PostForm } from '@/components/post-form';

export default function LoginPage() {
  const [user, setUser] = useState<string | null>(null);

  if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-semibold">👋 Вітаю, {user}!</h1>
      <PostForm />
    </div>
  );
}
