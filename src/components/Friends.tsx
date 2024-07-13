import React from 'react'
import Friend from './Friend'
import { getSideBarUsers } from '@/lib/userdata'
import { auth } from '@/auth'

const Friends = async () => {
    const authUser = await auth()
    const OtherUser = authUser?.user ? await getSideBarUsers(authUser?.user?._id) : []

  return (
    <div className='flex-1 overflow-y-auto'>
        {
            OtherUser.map((user) => {
                return (<Friend key={user._id as number} user={user}/>);
            })
        }
    </div>
  )
}

export default Friends