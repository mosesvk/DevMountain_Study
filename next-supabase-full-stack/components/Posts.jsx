import React from 'react';
import Link from 'next/link';
import { Button } from '@supabase/ui';

const Posts = ({ posts, user }) => {
  return (
    <div>
      <h1 className='text-3xl font-semibold tracking-wide mt-6 mb-2'>Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='text-gray-500 mt-2'>Author: {post.user_email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
