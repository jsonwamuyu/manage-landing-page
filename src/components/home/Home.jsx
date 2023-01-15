import React from 'react'

const Home = () => {
  return (
    <section className='bg-gray-200 min-h-screen flex justify-start h-full p-10 items-end'>
        <div className='flex flex-col gap-2 bg-red-700'>
            <h1 className='text-3xl text-white font-semibold'>
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