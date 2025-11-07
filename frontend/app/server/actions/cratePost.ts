'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  if (!title || !content) {
    return { success: false, error: 'Усі поля обов’язкові' };
  }



  return { success: true, message: 'Пост створено!' };
}
