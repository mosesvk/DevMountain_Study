import { useState, useEffect } from 'react'
import { supabase } from '../api'
import Posts from '../components/Posts';

export default function Home({user}) {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select()
    setPosts(data)
    setLoading(false)
  }


  if (loading) return <p className="text-2xl">Loading...</p>
  if (!posts.length) return <p className="text-2xl">No posts.</p>
  return (
    <>
      <Posts posts={posts} user={user} />
    </>
  )
}