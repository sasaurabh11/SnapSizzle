'use client'

import React from 'react'
import ChatTopBar from './ChatTopBar'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

function ChatPageUser({userProfile, messages, authUser} : {userProfile : any, messages : any, authUser : any}) {
  return (
    <div className='m-2 flex flex-col h-[96%]'>
      <ChatTopBar userProfile={userProfile}/>
      <ChatBody messages={messages} authUser={authUser}/>
      <ChatInput/>
    </div>
  )
}

export default ChatPageUser