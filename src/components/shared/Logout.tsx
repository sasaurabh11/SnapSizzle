import React from 'react'
import { Button } from '../ui/button'
import { IoMdLogOut } from 'react-icons/io'
import { logoutHandler } from '@/lib/serveraction'
import { signOut } from '@/auth'
import { redirect } from 'next/navigation'

function Logout() {
    const logoutHandler = async () => {
        'use server'
        try {
            await signOut();
        } catch (error) {
            console.log(error);
            throw error
        }
        redirect('/login')
    }

  return (
    <form action={logoutHandler}>
        <Button size={'icon'} className='rounded-full bg-black text-white' variant={'ghost'}>
            <IoMdLogOut />
        </Button>
    </form>
  )
}

export default Logout