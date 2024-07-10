import { signIn } from '@/auth'
import Login from '@/components/Login'
import React from 'react'

function LoginPage() {
  const loginHandler = async () => {
    'use server'
    await signIn('google')
  }

  return (
    <form action={loginHandler}>
        <Login />
    </form>
  )
}

export default LoginPage