import React from 'react';
import ReactMarkdown from 'react-markdown'


const PostItem = ({ id, title, email, content, user }) => {

  return (
    <div>
      <h1 className='text-5xl mt-4 font-semibold tracking-wide'>
        {title}
      </h1>
      <p className='text-sm font-light my-4'>by {email}</p>
      <div className='mt-8'>
        <ReactMarkdown className='prose' children={content} />
      </div>
      {user && user.id == id && (
        <h1>Edit this Post</h1>
      )}
    </div>
  );
};

export default PostItem;
