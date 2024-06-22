import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo-app.png'

function layout({children} : {children:React.ReactNode}) {
  return (
    <div className='bg-gray-300 h-screen'>
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='bg-white flex flex-col items-center text-center shadow-lg p-10 rounded-sm'>
                    <div>
                        <Image src={logo} alt="app-logo" width={40} height={40} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
  )
}

export default layout