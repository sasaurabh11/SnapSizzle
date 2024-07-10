import { auth } from '@/auth'
import React from 'react'
import Logout from './shared/Logout'
import { Avatar, AvatarImage } from './ui/avatar'
import SearchBar from './SearchBar'
import Friends from './Friends'

const LeftSideBar = async () => {
    const authUser = await auth()

  return (
    <div className='w-[50%] md:w-[25%] m-2 border-2 border-gray-300 rounded-lg'>
        <div className='flex p-4 items-center justify-between border-b border-gray-300 pb-3'>
            <div className='flex items-center gap-2 text-lg'>
                {
                    authUser && (
                        <>
                            <Avatar>
                                <AvatarImage src={authUser.user?.image!} alt='@shadcn' />
                            </Avatar>
                            <h1 className='font-bold'>{authUser.user?.name!}</h1>
                        </>
                    )
                }
            </div>
            <div>
                <Logout />
            </div>
        </div>
        <div className='p-2'>
            <SearchBar />
            <Friends />
        </div>
    </div>
  )
}

export default LeftSideBar