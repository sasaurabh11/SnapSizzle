import React, { use } from 'react'
import ChatPage from '../page';
import ChatPageUser from '@/components/ChatPageUser';
import { getProfileUser } from '@/lib/userdata';
import { getMessage } from '@/lib/messageData';
import { auth } from '@/auth';

const chattingpage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let userProfile = await getProfileUser(id);
  // userProfile = JSON.stringify(userProfile);

  const authUser = await auth()
  const messages = authUser ? await getMessage(authUser?.user?._id, id) : [];

  return (
    <div className='w-[72%]'>
      <ChatPageUser userProfile={userProfile} messages={messages} authUser={authUser} />
    </div>
  )
}

export default chattingpage