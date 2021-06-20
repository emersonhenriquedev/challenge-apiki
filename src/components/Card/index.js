import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import './Card.css'
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
      <Link to={`blog/${post.slug}`} className="link link__featured">
        <img className="card__featured" src={urlImg} alt="" />
      </Link>
      <div className="card__body">

        <h3 className="card__title" >{post.title.rendered}</h3>
        <div className="card__excerpt">
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>

          <div className="card__btn-container">
            <Link className="card__btn" to={`blog/${post.slug}`}>
              Leia mais
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}
