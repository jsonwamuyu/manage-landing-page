import React ,{useState} from 'react'

import {BsTwitter, BsGithub,BsYoutube, BsPinterest, BsFacebook, BsInstagram, BsMenuButton} from 'react-icons/bs'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

const Manage = () => {
    const [toggle, setToggle] = useState(false)
    const data = [
        {
            badge:'01',
            title:"Track company-wide progress", 
            desc:"See how your day-to-day tasks fit into the winder vision. Go from tracking progress from milestone level all the way do to the smallest of details. Never lose site of the bigger picture again."
        },
        {
            badge:"02",
            title:"Advanced built-in reports",
            desc:"Set internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports to keep key stakeholders informed"
        },
        {
            badge:"03",
            title:"Everything you need in one place",
            desc:"Stop jumping from one service to another to communicate, store files, track tasks and shared document. Manage offers an all-in-one team productivity solution"
        }
    ]

    const feedback = [
        {
            imgUlr:'/bea.jpg',
            name:'Alisha Li',
            message:"Manage has supercharged our team's workflow.The ability to maintain visiblity on larger milestone at all time keeps everyone motivated."
        },
        {
            imgUlr:'/man.jpg',
            name:'Adam Lincon',
            message:"We have been able to cancel many other subscriptions since using manage. There is no more cross-channel confusion and everyone of more focused."
        },
        {
            imgUlr:'/dark.png',
            name:'Billy James',
            message:"Manage has supercharged our team's workflow.The ability to maintain visiblity on larger milestone at all time keeps everyone motivated."
        }
    ]
  return (
    <section className='bg-white h-screen w-screen'>
        <nav className='relative p-[2rem] z-10 lg:px-[4rem] xl:px-[8rem] w-full h-[3rem] flex flex-row justify-between items-center'>
            <div className=' flex justify-center items-center'>
                <img src="/bolt.png" alt="logo" className='h-8'/>
            </div>
            <ul className='hidden h-full md:flex justify-center items-center'>
                {['pricing','product', 'about us','careers', 'community'].map((item, i) =>(
                <li className='p-3' key={item+i}>
                    <a className='capitalize hover:text-blue-900' href={`#${item}`}>{item}</a></li>
                    ))}
            </ul>
            <a href="#" className='hidden md:block bg-orange-600 hover:bg-orange-500 p-3 pt-2 
             px-6 rounded-full baseline text-white'>Get Started</a>

             <div className='md:hidden  cursor-pointer relative flex items-center justify-center'>
                <HiOutlineMenuAlt3 onClick={() => setToggle(true)} className='w-8 h-8'/>
             </div>
             {toggle && (
                <div className='absolute left-0 z-50 backdrop-blur-xl top-0 right-0 h-screen flex flex-col space-y-10 px-6 py-[1rem]' >
                    <HiX onClick={() =>setToggle(false)} className="flex self-end mr-[0.5rem] h-8 w-8"/>
                    <ul className=' h-full md:flex justify-center items-center'>
                        {['pricing','product', 'about us','careers', 'community'].map((item, i) =>(
                            <li className='p-3' key={item+i}>
                               <a onClick={() => setToggle(false)} className='capitalize hover:text-blue-900' href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <a href="#" className=' bg-orange-600 hover:bg-orange-500 p-3 pt-2 
                        px-6 rounded-full baseline text-white'>Get Started</a>
                    </div>
            
                </div>
             )}
        </nav>
        <div id="hero" className='flex flex-col-reverse md:flex-row w-full items-center
         space-y-0 md:space-y-0 mt-10 px-[2rem] lg:px-[4rem] xl:px-[8rem]'>
            <div className='text-center items-center flex flex-col md:items-start md:text-start mb-32 space-y-12 md:w-1/2'>
                <h1 className='text-4xl max-w-md text-center md:text-5xl font-bold md:text-left'>
                    Bring everyone together to build better products
                </h1>
                <p className='max-w-sm text-center md:text-left text-gray-500'>Manage makes it simple for software teams to plan day-to-day tasks
                    while keeping the larger teams goal in view
                </p>
                <div className="flex justify-center md:justify-start">
                     <a href="#" className='bg-orange-600 hover:bg-orange-500 p-3 pt-2 
                       px-6 rounded-full baseline text-white'>
                      Get Started
                     </a>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img src="/about02.png" alt="background"/>
                <div className=' bg-white font-semibold -mt-[5rem] z-10 gap-3 p-3 shadow-md
                 w-1/2 mx-auto rounded justify-center items-center'>
                    <div className='bg-neutral-100 w-full rounded pt-8 pl-3 pr-8 pb-1'>
                        <h1 className="text-5xl italic">89.74%</h1>
                    </div>
                    <div className='flex gap-3 w-full'>
                        <div className='bg-orange-600 w-full rounded pt-8 pl-3 pr-8 pb-1'>
                            <h3 className='text-white'>+1.5%</h3>
                        </div>
                        <div className='bg-neutral-100 w-full rounded pt-8 pl-3 pr-8 pb-1'>
                            <h3>88.24%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="features" 
            className='flex w-full flex-col md:flex-row items-start space-y-12 md:space-y-0
             mt-10 px-[2rem] lg:px-[4rem] xl:px-[8rem]'>
            
            <div className='md:max-w-1/2 space-y-12 flex-col flex'>
                <h2 className='text-4xl font-bold max-w-md text-center md:text-left'>What's different about manage?</h2>
                <p className=' text-gray-500 max-w-sm text-center md:text-left'>
                    Manage provides all the functionality your team need,
                    without the complexity. Our sotware is tailor-made for
                    modern digital teams.
                </p>
            </div>
            <div className='flex flex-col space-y-8 md:w-1/2'>
                {/* List item */}
            {data.map((item, i) => (
               <div key={item+i} className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* Heading */}
                    <div className='rounded-l-full bg-orange-300 md:bg-transparent'>
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500 text-sm">{item.badge}</div>
                            <h3 className='text-base font-bold md:mb-4 md:hidden'>{item.title}</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>{item.title}</h3>
                        <p className='text-gray-500'>{item.desc}</p>
                    </div>
               </div>
            ))}
            </div>
        </div>
        
        <section id='testimonials'>
            <div className='max-w-6xl text-center px-5 mx-auto mt-32'>
                <h2 className="text-center font-bold text-4xl">What's Different About Manage?</h2>
                <div className="flex-col flex md:flex-row mt-24 md:space-x-6">
                    {feedback.map((item,i) => (
                    <div className="flex flex-col items-center p-6 space-y-6 my-6 md:my-0 rounded-lg bg-neutral-100 md:w-1/3">
                        <img src={item.imgUlr} alt="bea" className='w-16 rounded-full h-16 -mt-14' />
                        <h5 className='text-xl font-bold'>{item.name}</h5>
                        <blockquote>
                            <p className='text-sm text-gray-500'>{`"${item.message}"`}</p>
                        </blockquote>
                    </div>
                ))}
                </div>
                <div className="my-16">
                    <a href="#" className='bg-orange-600 hover:bg-orange-500 p-3 pt-2 
                       px-6 rounded-full baseline text-white'>
                      Get Started
                     </a>
                </div>
            </div>
        </section>

        <section id="cta" className='bg-orange-600'>
            <div className='flex flex-col md:flex-row items-center px-[2rem] lg:px-[4rem] xl:px-[8rem]
            justify-between py-12 space-y-12 md:space-y-0'>
                <h2 className='text-5xl font-bold leading-tight text-center text-white
                 md:text-4xl md:max-w-xl md:text-left'>Simplify how your team works today</h2>
                <div>
                    <a href="#" className='bg-white hover:bg-gray-900 p-3 pt-2 
                        px-6 rounded-full shadow-2xl baseline text-gray-600'>
                        Get Started
                    </a>
                </div>
            </div>
        </section>

        <footer className='bg-black'>
            <div className="flex flex-col-reverse justify-between py-10
            space-y-8 md:flex-row md:space-y-0 px-[2rem] lg:px-[4rem] xl:px-[8rem]">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 
                md:space-y-0 md:flex-col">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyrigth &copy; 2022, All rights Reserved
                    </div>
                    <div>
                        <img src="/bolt.png" className='h-8' alt="logo" />
                    </div>
                    <div className="flex justify-center text-white space-x-4">
                        <a href="https://facebook.com/ciri"><BsFacebook/></a>
                        <a href="https://youtube.com/ciri"><BsYoutube/></a>
                        <a href="https://twitter.com/ciri"><BsTwitter/></a>
                        <a href="https://pinterest.com/ciri"><BsPinterest /></a>
                        <a href="https://instagram.com/ciri"><BsInstagram /></a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className='hover:text-orange-600'>Home</a>
                        <a href="" className='hover:text-orange-600'>Pricing</a>
                        <a href="" className='hover:text-orange-600'>Products</a>
                        <a href="" className='hover:text-orange-600'>About</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className='hover:text-orange-600'>Careers</a>
                        <a href="" className='hover:text-orange-600'>Community</a>
                        <a href="" className='hover:text-orange-600'>Privacy Policy</a>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input type="text" 
                                className='flex-1 px-4 rounded-full focus:outline-none placeholder:text-gray-500'
                                placeholder='Updates in your inbox'/>
                            <button className='bg-orange-600 text-white hover:bg-white hover:text-orange-600
                             focus:outline-none rounded-full px-6 py-2'>Go</button>
                        </div>
                    </form>
                    <div className="hidden md:block text-white">
                        Copyrigth &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Manage