"use client";

import React from 'react'

const Logo = () => {
  return (
	<a className='flex flex-col items-left justify-center' href='/'>
		{/* <div className='flex items-center justify-center h-10 w-10 rounded-2xl bg-white text-black drop-shadow-lg'/> */}
        <div className='pl-1 text-white font-bold'>
            Administrator
        </div>
		{/* <img src='/verified.svg' alt='verified logo' className='h-5 w-5 mt-1 mb-1.5'/> */}
	</a>
  )
}

export default Logo