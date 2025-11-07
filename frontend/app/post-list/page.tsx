'use client'

import { useEffect, useState } from 'react'

function PostsList() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/posts`)
        const data = await res.json()
        setPosts(data.docs || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    })()
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Пости</h2>
      {posts.length === 0 ? (
        <p>Немає постів для відображення</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border rounded p-4 mb-4">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
          </div>
        ))
      )}
    </div>
  )
}


export default PostsList