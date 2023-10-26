
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FirstSection = () => {


    return (

            <div className='flex flex-col justify-center items-center gap-9'>
          
                <div className='text-center'>
                    <h1 className="text-7xl lg:text-8xl font-title text-white">DeVacas</h1>
                    <p className='font-sans font-extralight text-3xl text-white'> el aliado de tus viajes</p>
                </div>      <Link className='border bg-white/5 font-sans rounded-full font-extralight backdrop-blur-md px-8 py-2 w-fit hover:scale-105 transition-all duration-300 ease-in-out' href={'/auth/login'}>
                    <p className='flex justify-center items-center gap-2' >
                        Quiero ver más!<span><PaperAirplaneIcon className='w-3 h-3' /></span>
                    </p>
                </Link>

                    <Image src="images/traveling.svg" width={400} height={250} alt='Product Image' className='w-2/3 h-fit' />

            </div>

    )
}


export default FirstSection
