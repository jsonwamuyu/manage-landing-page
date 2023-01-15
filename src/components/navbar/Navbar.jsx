import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';


const Navbar = () => {
  return (
    <>
    <div className='flex gap-3 justify-center items-center bg-black
     text-white w-full h-[1.5rem] text-xs overflow-hidden font-semibold'>
      <p>Introducing ChatGPT research release</p> 
      
        <a href='#' className='flex justify-center items-center'>Try <span><HiArrowSmRight /></span></a>
        <a href='#' className='flex justify-center items-center'>Learn More <span><HiArrowSmRight /> </span></a>
      
      
    </div>
    <nav className='bg-white h-[3rem] py-2 flex justify-between
     items-center px-[2rem] md:px-[4rem] lg:px-[8rem] w-full'>
      <div className='h-full w-full flex items-center'>
        <img src='./bolt.png' className='h-8 w-15 object-contain'/>
      </div>
      <div className='h-full w-full flex items-center justify-end'>
        <ul className='flex justify-between items-center'>
          {['API', 'RESEARCH','BLOG', 'ABOUT'].map((item, i) =>(
            <li key={item+i}><a className='text-xs' href={`#${item}`}>{item}</a></li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar