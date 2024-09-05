import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button( {title = "Get started"}) {
  return (
    <div className='  min-w-40  px-3 py-2 bg-zinc-100 text-black  text-sm rounded-full flex items-center justify-between font-semibold'>
        <span>{title}</span>
        <MdSubdirectoryArrowRight />
    </div>
  )
}

export default Button