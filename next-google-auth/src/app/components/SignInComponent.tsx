"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import Image from 'next/image';
const SignInComponent = () => {
    const {data: session} = useSession();
    // const user = section?.user;

    if(session && session.user) {
        return (
            <div className='SignUp'>
                <Image 
                    src={session.user.image ?? ""}
                    alt={session.user.name ?? ""}
                    width={32}
                    height={32}
                />
    
                {session.user.name }
                <button onClick={() => signOut()}>
                        Sign Out
                </button>
            </div>
        )
    }
    return (
        <div className='SignIn'>
            <button onClick={() => signIn()}>
                    Sign In
            </button>
        </div>
    )
  
}

export default SignInComponent