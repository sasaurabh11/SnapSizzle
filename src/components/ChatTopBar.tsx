import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

function ChatTopBar({userProfile} : {userProfile : any}) {
  return (
    <div>
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Link href={"/chat"} className='p-2 cursor-pointer bg-[#E3E6E8] hover:bg-[#c7cacb] rounded-full'>
                    <IoIosArrowBack size="24px" />
                </Link>
                <div className='flex items-center gap-1 text-lg'>
                    <Avatar>
                        <AvatarImage src={userProfile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <h1 className='font-bold'>{userProfile?.fullname}</h1>
                </div>
            </div>
            <form >
                <SubmitButton />
            </form>
        </div>
    </div>
  )
}

export default ChatTopBar;

const SubmitButton = () => {
    // const { pending } = useFormStatus();
    return (
        <Button variant="destructive">
            {/* {
                !pending ? "Clear Chat" : <Button variant={'destructive'}><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>
            } */}
            button
        </Button>
    )
}