'use client'

import React from 'react'
import ChatTopBar from './ChatTopBar'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

function ChatPageUser({userProfile} : {userProfile : any}) {
  return (
    <div>
      <ChatTopBar userProfile={userProfile}/>
      <ChatBody/>
      <ChatInput/>
    </div>
  )
}

export default ChatPageUser