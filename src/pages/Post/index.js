import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import moment from 'moment'
import Loader from 'react-loader-spinner'

import './Post.css'

export default function Post() {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  const { slug } = useParams()

  useEffect(() => {

    async function loadPost() {
      const response = await axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      console.log(response.data)
      setPost(response.data)
      setLoading(false)
    }

    loadPost()

  }, [])

  function createContentMarkup() {
    return { __html: post[0].content.rendered }
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Loader type="Audio" color="#000" />
      </div>
    )
  }

  return (
    <article className="post">
      <h1 className="post__title">{post[0].title.rendered}</h1>
      <div className="post__info">
        <span className="post__info-author">{post[0]._embedded.author[0].name}</span>
        <time className="post__info-date" dateTime={post[0].date}>{moment(post[0].date).format("Do MMMM  YYYY")}</time>
      </div>
      <div className="post__content" dangerouslySetInnerHTML={createContentMarkup()}>
        
      </div>

    </article>
  )
}
