import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <h3>Subscribe</h3>
        <p>Sign up with your email address to receive news and updates</p>
        <form>
            <div>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
                <input type='text' placeholder='Email' />
            </div>
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe