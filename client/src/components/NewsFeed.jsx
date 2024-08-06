import React from 'react'
import Timer from './Timer'

const NewsFeed = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 mb-8 mr-4 '>
    <div className='flex flex-col max-w-[95%] bg-white ml-4 md:ml-16 lg:ml-24 xl:ml-28'>
    
    <div className='flex '>
        <h1 className='text-[#1D2E4D] font-semibold text-2xl lg:text-4xl p-6 inline-flex mr-auto'>
            News Feed
        </h1>
        <a href=""><p className='p-6 text-[#1D2E4D] hover:text-[#3368CC] transition-colors duration-300 h-3 font-normal mt-2'><i class="ri-eye-fill mr-1"></i>See more</p></a>
    </div>
        
        
<div className='flex flex-col lg:flex-row mb-2 md:flex-row'> 
<div class="max-w-[23rem] 2xl:max-w-96 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300 ml-6 mr-6 xl:mr-0 mb-4">
    <a href="#">
        <img class="rounded-t-lg h-52 w-full" src="https://profiletree.com/wp-content/uploads/2023/02/technology-3.webp" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 mt-2 text-lg font-semibold tracking-tight text-gray-700 ">Noteworthy technology</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the enterprise technology  of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-[23rem] 2xl:max-w-96 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300 ml-6 mr-6 mb-4">
    <a href="#">
        <img class="rounded-t-lg h-52 w-full" src="https://cdn.britannica.com/84/203584-131-357FBE7D/speed-internet-technology-background.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 mt-2 text-lg font-semibold tracking-tight text-gray-700 ">Blockchain Innovations</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">New advancements in blockchain field improved speed and security.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>



<div className='flex flex-col lg:flex-row mb-3 md:flex-row'>
<div class="max-w-[23rem] 2xl:max-w-96 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300 ml-6 mr-6 xl:mr-0 mb-4">
    <a href="#">
        <img class="rounded-t-lg h-52 w-full" src="https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 mt-2 text-lg font-semibold tracking-tight text-gray-700">Edge Computing Growth</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Edge computing solutions expanded, bringing faster processing capabilities.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-[23rem] 2xl:max-w-96 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300 ml-6 mr-6 mb-4">
    <a href="#">
        <img class="rounded-t-lg h-52 w-full" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/technology-trend-freepik-1647963838.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 mt-2 text-lg font-semibold tracking-tight text-gray-700">AI in Healthcare</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">AI in healthcare improved diagnostics and personalized treatment plans.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>
    </div>

    <div className='flex flex-col w-[95%] ml-4 mr-4 xl:ml-0 md:ml-14 lg:w-[30%] 2xl:w-[35%] 2xl:p-3 h-[595px] bg-white'>
    <div className='flex '>
        <h1 className='text-[#1D2E4D] font-semibold text-2xl lg:text-4xl p-6 inline-flex mr-auto'>
            Events
        </h1>
        <p className='p-6 text-[#1D2E4D] hover:text-[#3368CC] transition-colors duration-300 h-3 font-normal mt-2'><i class="ri-eye-fill mr-1"></i><a href="">See more</a></p>
    </div>

    <div className='flex flex-col mb-3' >
        <div className='flex flex-row ml-6 bg-gray-100 mr-6'>
            <div className='bg-[#3368CC] p-3 text-white font-semibold text-2xl items-center'>25 <br /> <span className='font-normal text-base'>JUL</span></div>
            <div className='text-lg font-semibold ml-3 m-2'>
                Finance Town Hall
                <p className='text-sm font-normal mt-1 mb-1'>Dolor sit amet, consectetur adipisicing.</p>
                <div className='flex flex-row'>
                <i class="ri-calendar-line text-sm mt-1 font-normal"></i>
                <p className='text-sm font-normal mt-1 mb-1 ml-2'>11:30am - 12:30pm</p>
                </div>
            </div>
        </div>
    </div>

    <div className='flex flex-col mb-3' >
        <div className='flex flex-row ml-6 bg-gray-100 mr-6'>
            <div className='bg-[#3368CC] p-3 text-white font-semibold text-2xl items-center'>26 <br /> <span className='font-normal text-base'>JUL</span></div>
            <div className='text-lg font-semibold ml-3 m-2'>
                CEO Meetup
                <p className='text-sm font-normal mt-1 mb-1'>Lorem ipsum dolor sit consectetur.</p>
                <div className='flex flex-row'>
                <i class="ri-calendar-line text-sm mt-1 font-normal"></i>
                <p className='text-sm font-normal mt-1 mb-1 ml-2'>10:30am - 11:30am</p>
                </div>
            </div>
        </div>
    </div>

    <div className='flex flex-col mb-3' >
        <div className='flex flex-row ml-6 bg-gray-100 mr-6'>
            <div className='bg-[#3368CC] p-3 text-white font-semibold text-2xl items-center'>29 <br /> <span className='font-normal text-base'>JUL</span></div>
            <div className='text-lg font-semibold ml-3 m-2'>
                Cricket League
                <p className='text-sm font-normal mt-1 mb-1'>Soluta quia dolorem quidem quisquam.</p>
                <div className='flex flex-row'>
                <i class="ri-calendar-line text-sm mt-1 font-normal"></i>
                <p className='text-sm font-normal mt-1 mb-1 ml-2'>10:00am - 01:00pm</p>
                </div>
            </div>
        </div>
    </div>

    <div className='flex flex-col mb-3' >
        <div className='flex flex-row ml-6 bg-gray-100 mr-6'>
            <div className='bg-[#3368CC] p-3 text-white font-semibold text-2xl items-center'>30 <br /> <span className='font-normal text-base'>JUL</span></div>
            <div className='text-lg font-semibold ml-3 m-2'>
                Team Dinner
                <p className='text-sm font-normal mt-1 mb-1'>Lorem ipsum, dolor sit amet!</p>
                <div className='flex flex-row'>
                <i class="ri-calendar-line text-sm mt-1 font-normal"></i>
                <p className='text-sm font-normal mt-1 mb-1 ml-2'>08:00pm - 10:00pm</p>
                </div>
            </div>
        </div>
    </div>

    {/* countdown */}

    <div className='relative bg-[#1D2E4D] mt-5 xl:mt-14'>
  <img
    src="https://www.godelta.com/hubfs/Blog-Images/company-swag-ideas/Best-Company-Swag-Ideas_Hero.jpg"
    alt=""
    className='h-[350px] w-full object-cover'
  />
  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
  <div className='absolute inset-0 flex flex-col items-center justify-center'>
    <h1 className='text-white font-semibold text-2xl mb-10'>EXTENDED: Limited offer!!!</h1>

    <Timer duration={2 * 24 * 60 * 60 * 1000} />

    <a href="#" class="inline-flex items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Shop Swags'
             
        </a>
    <button></button>
  </div>
</div>


    </div>
    </div>
    
  )
}

export default NewsFeed