import React, { use } from 'react'
import ChatPage from '../page';
import ChatPageUser from '@/components/ChatPageUser';
import { getProfileUser } from '@/lib/userdata';

const chattingpage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let userProfile = await getProfileUser(id);
  // userProfile = JSON.stringify(userProfile);

  return (
    <div className='w-[72%]'>
      <ChatPageUser userProfile={userProfile} />
    </div>
  )
}

export default chattingpage