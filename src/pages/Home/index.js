import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
// import { BlogContext } from "../../context/BlogContext"

import CardList from "../../components/CardList"

import './Home.css'

export default function Home() {

  // const { state, dispatch, loadMore, loading } = useContext(BlogContext)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(undefined)

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get((`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`))
      setPosts([...posts, ...response.data])
      setLoading(false)

      if (currentPage === 1) {
        setTotalPage(parseInt(response.headers['x-wp-totalpages']))
      }
    }

    fetchPosts()

  }, [currentPage])

  function handleLoadMoreButton() {
    if (currentPage <= totalPage) {
      setLoading(true)
      setCurrentPage(prev => prev + 1)
    }
  }


  function showLoadMoreButton() {
    if (currentPage < totalPage) {
      return <button onClick={handleLoadMoreButton}>Carregar mais</button>
    }
    return <p>Não há mais posts para exibir</p>
  }

  return (
    <div className="posts ">

      <h4>{currentPage}</h4>
      <CardList posts={posts} />
      <div style={{ textAlign: 'center' }}>
        {!loading ? showLoadMoreButton() : <Loader type='Bars' color="#000" />}
      </div>
    </div>
  )
}
