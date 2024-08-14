
import { Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Questions = () => {
  return (
    <div className='all-questions flex w-[100%] md:py-[20px] py-5 border-b-[1px]'>
        <div className="all-questions-container flex justify-between w-[100%]">
            {/* LEFT SECTION */}
            <div className="all-questions-left flex mr-5 md:mr-[30px]">
                <div className="all-options flex flex-col ">
                    <div className="all-option flex flex-col items-center mb-[10px]">
                        <p className='text-base'>0</p>
                        <span className='text-xs'>Votes</span>
                    </div>
                    <div className="all-option flex flex-col items-center mb-[10px]">
                        <p className='text-base'>0</p>
                        <span className='text-xs'>Answers</span>
                    </div>
                    <div className="all-option flex flex-col items-center mb-[10px]">
                        <small>0 Views</small>
                    </div>
                </div>
            </div>

            {/* MIDDLE SECTION */}
            <div className="question-answer flex flex-col w-[100%]">
                <Link to='/all-questions/view' className='text-[#0151f0d8] text-[16px] md:text-[1.05rem] mb-[10px] hover:text-[#1a4badd8] transition-all duration-300'>This is Question title</Link>
                <div className='w-[100%]'>
                    <div className='text-[14px] md:text-[1rem]'>This is answer - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita in atque animi quasi voluptatum inventore sequi! Laudantium iste fuga at dicta repellendus quam harum ea excepturi sint? Hic, quae sapiente.</div>
                </div>
                {/* TAGS */}
                <div className='flex flex-col md:flex md:flex-row'>
                    <span className='question-tags my-[6px] md:my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium w-fit'>
                        react
                    </span>
                    <span className='question-tags my-[6px] md:my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium w-fit'>
                        antd
                    </span>
                    <span className='question-tags my-[6px] md:my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium w-fit'>
                        frontend
                    </span>
                    {/* AUTHOR */}
                 <div className="author flex items-center justify-center ml-auto">
                    <div className='author-details flex items-center justify-center mt-2 md:mt-0'>
                        <Link className='flex items-center justify-center'>
                        <Avatar size={22}/>
                        <p className='text-[#0151f0d8] hover:text-[#1a4badd8] text-sm mr-1 ml-[2px]'>username</p></Link>
                        <small className='text-gray-500'>Timestamp</small>
                    </div>
                    
                </div>
                </div>
                
            </div>

            {/* RIGHT SECTION */}

        </div>
    </div>
  )
}

export default Questions