'use server';

export async function authorizeUser(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === 'test' && password === 'test') {
    return { success: true, user: { name: 'test' } };
  }

  return { success: false, error: 'Невірний логін або пароль' };
}
