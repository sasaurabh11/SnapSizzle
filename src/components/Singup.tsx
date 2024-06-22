import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";

function Singup() {
  return (
    <div>
        <h1 className='text-center text-2xl font-medium my-2'>Sign Up to App ; </h1>
        <Button className='w-full my-4 gap-2 bg-black text-white'><FcGoogle size="24px"/> Sign up with Google</Button>
        <p>Already have an account? <Link href="/login" className='underline'>Login</Link></p>
    </div>
  )
}

export default Singup