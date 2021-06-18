import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'

export const BlogContext = createContext({

})

const initialState = {
  posts: [],
  currentPage: 1,
  loading: false,
  totalPage: 0,
  totalPosts: 0
}

const actions = {
  nextPage(state, action) {
    const currentPage = action.payload
    return {
      ...state,
      loading: true,
      currentPage
    }
  },
  fetchPosts(state, action) {
    const posts = action.payload
    return {
      ...state,
      loading: false,
      posts
    }
  },

}

export function BlogProvider(props) {

  const [posts, setPosts] = useState([])

  function reducer(state, action) {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get((`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`))
      setPosts(response.data)

    }

    fetchPosts()

  }, [])

  useEffect(() => {

    dispatch({
      type: 'fetchPosts',
      payload: posts
    })

  }, [posts])

  const loadMore = async () => {

    const response = await axios.get((`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${state.currentPage + 1}`))

    dispatch({
      type: 'nextPage',
      payload: state.currentPage + 1
    })

    setPosts([...posts, ...response.data])

  }

  return (
    <BlogContext.Provider value={{ state, dispatch, loadMore }}>
      {props.children}
    </BlogContext.Provider>
  )

}
