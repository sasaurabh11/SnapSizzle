import Image from 'next/image'
import React from 'react'
// import { Input } from '../ui/input';

import { Button } from './ui/button'
import logo from "../../public/logo-app.png"
import Link from 'next/link'
import Logout from './shared/Logout'
import { auth } from '@/auth'
import { TbGridDots } from 'react-icons/tb'
import { Input } from './ui/input'

const Navbar = async () => {
    const authUser = await auth()

    return (
        <div className='flex items-center justify-between w-screen px-10 py-5'>
            <div className='flex items-center gap-10  ml-5'>
                <Image src={logo} width={50} height={50} alt="snapchat-logo" />
                <Input type="text" placeholder="Search..." className='rounded-full' />
            </div>
            <div className='md:block hidden'>
                <Button variant="ghost" >Stories</Button>
                <Button variant="ghost" >Spotlight</Button>
                <Link href={"/chat"}><Button variant="ghost" >Chat</Button></Link>
                <Button variant="ghost" >Lenses</Button>
            </div>
            <div className='flex items-center gap-5'>
                <Button size={'icon'} variant={'secondary'} className='rounded-full text-black'>
                    <TbGridDots size={"24px"} />
                </Button>
                <Button className='rounded-full bg-gray-500'>SnapSizzle Ads</Button>
                <Button className='rounded-full bg-gray-500'>Download</Button>

                {
                    authUser ? (<Logout />) : (<Link href="/login"><Button className='rounded-full bg-neutral-500'>Login</Button></Link>)
                }

            </div>
        </div>
    )
}

export default Navbar