import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../../api'
import PostItem from '../../components/PostItem'

export default function Post({ post }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async () => checkUser()
    )
    checkUser()
    return () => {
      authListener?.unsubscribe()
    };
  }, [])
  async function checkUser() {
    const user = supabase.auth.user()
    setUser(user)
  }


  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <PostItem id={post.user_id} title={post.title} email={post.user_email} content={post.content} user={user} />
  )
}

export async function getStaticPaths() {
  const { data, error } = await supabase
    .from('posts')
    .select('id')
  const paths = data.map(post => ({ params: { id: JSON.stringify(post.id) }}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  const { data } = await supabase
    .from('posts')
    .select()
    .filter('id', 'eq', id)
    .single()
  return {
    props: {
      post: data
    }
  }
}