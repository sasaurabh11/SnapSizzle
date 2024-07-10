import React from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { EmojiPopover } from './EmojiPopOver'

function ChatInput() {
    return (
        <div className='flex justify-between items-center gap-2'>
            <div className='p-2 cursor-pointer bg-[#E3E6E8] hover:bg-[#c7cacb] rounded-full'>
                <MdPhotoCamera size="24px" />
            </div>
            {/* <form onSubmit={submitHandler} className='w-full'> */}
                <div className='flex items-center gap-4'>
                    <input
                        // value={inputText}
                        // onChange={(e) => setInputText(e.target.value)}
                        className='rounded-full w-full border border-gray-400 p-2 outline-none font-medium'
                        type="text"
                        placeholder="Send a snap chat"
                    />
                    {
                        // loading ? (
                            <Button className='rounded-full' type='submit'>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        // ) : (
                        //     <Button className='rounded-full' type='submit'>Send Snap</Button>
                        // )
                    }

                </div>
            {/* </form> */}
            <div>
                <EmojiPopover />
            </div>
        </div>
    )
}

export default ChatInput