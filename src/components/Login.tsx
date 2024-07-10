import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <div>
        <h1 className='text-center text-2xl font-medium my-2'>Log in to App</h1>
        <Button className='w-full my-4 gap-2 bg-black text-white' variant={'ghost'}><FcGoogle size="24px"/> Login with Google</Button>
        <p>New to app? <Link href={'/signup'} className='underline'>Singup</Link></p>
    </div>
  )
}

export default Login