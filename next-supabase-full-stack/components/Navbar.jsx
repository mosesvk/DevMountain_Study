import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='p-6 border-b border-gray-300'>
      <Link href='/'>
        <span className='mr-6 cursor-pointer'>Home</span>
      </Link>
      {user && (
        <Link href='/create-post'>
          <span className='mr-6 cursor-pointer'>Create Post</span>
        </Link>
      )}
      <Link href='/profile'>
        <span className='mr-6 cursor-pointer'>Profile</span>
      </Link>
    </nav>
  );
};

export default Navbar;
