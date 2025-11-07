import { CollectionConfig, CollectionSlug } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories' as unknown as CollectionSlug,
      hasMany: true,
    },
    { name: 'content', type: 'richText' },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
}
