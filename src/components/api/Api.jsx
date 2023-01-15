import React from 'react'

const Api = () => {
  return (
    <>
        
    <section className='bg-[#f8f9fa] h-[55vh] w-full'>
      <nav className='flex justify-between items-center
      md:px-[4rem] px-[2rem] lg:pr-[8rem] lg:pl-[30rem] py-2 w-full h-[4rem] mb-2 lg:mb-4'>
        <div className='w-full flex justify-center items-center'>
          <ul className='flex justify-between items-center'>
            {['overview', 'pricing','docs', 'examples'].map((item, i) =>(
              <li key={item+i}><a className='text-xs' href={`#${item}`}>{item}</a></li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-end w-full'>
          <button className=' text-black'>log in</button>
          <button className='bg-black text-white mr-2'>sign up</button>
          
        </div>
      </nav>
      <div className='flex justify-center py-8 flex-col items-center w-full'>
        <div className='px-[2rem] sm:px-[4rem] md:px-[12rem] lg:px-[20rem] xl:px-[28rem] text-center flex flex-col justify-center items-center w-full'>
          <h1 className='text-3xl'>Buil next-gen apps with OpenAI's powerful models.</h1>
          <p>Access GPT-3, which performs a variety of natural language tasks, Codex,
            which translate natural language to code, and DALL.E, which creates and edits
            original images
          </p>
        </div>
        <div className='mt-4'>
          <button className='bg-black text-white mr-2'>Get started</button>
          <button className=' text-black'>read documentation</button>
        </div>
      </div>
    </section>

    <section className='bg-[#f0f0f0] lg:px-[8rem] py-10
     px-[2rem] md:px-[4rem] flex flex-col lg:flex-row gap-6 items-center w-full'>
      <div className='w-full flex items-center'>
        <p className='text-2xl'>Developers can now begin <br/> building apps with DALL.E API.</p>
      </div>
      <div className='flex flex-col gap-2 items-center w-full'>
        <p>More than 3 million people are already using <a href='https://dell.com' className='underline'>DELL.E</a> to extend their creativity and speed 
          up their workflows, generating over 4 million images a day. 
          Get started with this same technology in a matter of minutes.
        </p>
        <div className='mt-4'>
          <button className='bg-black text-white mr-2'>Get started</button>
          <button className='text-black'>Learn more</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Api