import { CollectionConfig, CollectionSlug } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    { name: 'content', type: 'textarea' },
    {
      name: 'posts',
      type: 'join',
      collection: 'posts' as unknown as CollectionSlug,
      on: 'categories',
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
}
