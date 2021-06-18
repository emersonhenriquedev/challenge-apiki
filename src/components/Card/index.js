import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ post }) {
  const [urlImg, setUrlImg] = useState('')

  useEffect(() => {
    try {
      setUrlImg(post._embedded['wp:featuredmedia'][0].source_url)
    } catch (e) { }

  }, [])

  return (
    <div className="card">
      <div className="card__body">
        <Link to={`blog/${post.slug}`} className="link">
          <img className="card__featured" src={urlImg} alt="" />
          <h3 className="card__title" >{post.title.rendered}</h3>
        </Link>

        <Link to={`blog/${post.slug}`} className="link">
          <div className="card__excerpt">
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          </div>
        </Link>
      </div>
      <div className="card__footer">
        <Link to={`blog/${post.slug}`}>
          Ver mais
        </Link>

      </div>
    </div>
  )
}
