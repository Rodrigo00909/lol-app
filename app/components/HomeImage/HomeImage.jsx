import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeImage = ( { href = '/', src, width, height, alt } ) => {
  return (
    <>
            <div className='flex items-end justify-center flex-grow h-[20rem] mt-10 pb-[1.25rem] w-1/2
                relative transition-all duration-400 ease bg-center
                bg-no-repeat  shadow-lg  shadow-indigo-500/40'>
                <div className='absolute skew-x-12 top-0 transform hover:scale-y-110 duration-1000 hover:duration-500 brightness-50 hover:brightness-100 '>
                <Link href={href}>
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                </Link>
                </div>
            </div>
    </>
  )
}

export default HomeImage