import { signIn } from '@/auth'
import Singup from '@/components/Singup'
import React from 'react'

function SignupPage() {
  const signupHandler = async () => {
    'use server'
    await signIn('google')
  }

  return (
    <form action={signupHandler}>
        <Singup />
    </form>
  )
}

export default SignupPage