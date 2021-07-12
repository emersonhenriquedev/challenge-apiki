import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import CardList from "../../components/CardList"

import './Home.css'

export default function Home() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(undefined)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get((`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`))
        setPosts([...posts, ...response.data])
        setLoading(false)

        if (currentPage === 1) {
          setTotalPage(parseInt(response.headers['x-wp-totalpages']))
        }

      } catch (err) {
        setError(true)
        console.log('Houve um erro na requisição')
        console.log(err)
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
      return <button className="posts__btn" onClick={handleLoadMoreButton}>Carregar mais</button>
    }
    return <p>Não há mais posts para exibir</p>
  }

  if (error) {
    return (
      <div className="posts ">
        
        <div style={{ textAlign: 'center' }}>
          <h1>A página não pôde ser exibida</h1>  
        </div>
      </div>
    )
  }

  return (
    <div className="posts ">
      <CardList posts={posts} />
      <div style={{ textAlign: 'center' }}>
        {!loading ? showLoadMoreButton() : <Loader type='Bars' color="#000" />}
      </div>
    </div>
  )
}
