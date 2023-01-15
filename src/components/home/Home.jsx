import React from 'react'

const Home = () => {
  return (
    <section className=' w-full flex h-[80vh] px-[2rem] md:px-[4rem] lg:px-[8rem] items-end'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>
                Join us in shaping the future <br /> of technology</h1>
            <div className='mt-4'>
                <button className='bg-white text-gray-500'>watch video</button>
                <button className=' text-white'>view careers</button>
            </div>
        </div>
    </section>
  )
}

export default Home