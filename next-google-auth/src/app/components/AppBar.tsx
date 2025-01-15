import Link from 'next/link'
import React from 'react'
import SignInComponent from './SignInComponent'

const AppBar = () => {
  return (
    <div className='header'>
        <div>
            <Link href="/">Home</Link>
            <Link href="/profile">User Profile</Link>
            <Link href="/admin">Admin Profile</Link>
        </div>

        <div>
            <SignInComponent />
        </div>
    </div>
  )
}

export default AppBar