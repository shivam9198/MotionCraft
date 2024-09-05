import React from 'react'
import Button from './Button'

function Navbar() {
  return (
   <div className='max-w-screen-xl  mx-auto  p-3  flex  justify-between items-center border-b-[2px] border-zinc-700' >
<div className='leftside  flex items-center'>
<img className='w-5 h-6 ' src='
https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp'>
</img>
<span className='text-sm ml-5' >Refocus</span>

<div className='links  flex gap-10 ml-20 '>
    {["Home", "Work", "Culture" , "","News"].map((elem,index) =>(
       <a className='text-sm' key={index} href="">
          {index===1 ?(<span className=' inline-block w-1 h-1 rounded-full bg-green-600'> </span>) : null }
          {elem.length===0 ?(<span className=' inline-block w-[2px] h-6 bg-zinc-700'></span>) : null }
          {elem}
         </a>
    ))
}
</div >
</div>
    <Button/>

   </div>
  
  )
}

export default Navbar