import React from 'react'
import Card from '../Card'

import './CardList.css'

export default function CardList({ posts }) {
  return (
    <div className="card-list">
      {posts.map(post => <Card key={post.id} post={post} />)}
    </div>
  )
}
