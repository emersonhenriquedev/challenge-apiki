import React from 'react'
import Card from '../Card'

export default function CardList({ posts }) {
  return (
    <div>
      {posts.map(post => <Card key={post.id} post={post} />)}
    </div>
  )
}
