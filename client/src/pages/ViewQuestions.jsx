import React, { useState } from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { Avatar } from 'antd'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  LifeBuoy,
  UserCircle,
  Settings,
  MessageCircleQuestion,
  Tags,
  House,
  Bell,
  ScrollText,
  Filter,
  CircleX,
  CircleChevronUp,
  CircleChevronDown,
  Bookmark,
  History,
} from "lucide-react";

const modules = {
  toolbar: [[{ header: [1, 2, 3, 4, 5, 6, false]}], 
  [{ font: [] }],
  [{ size: [] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [
    { list: "ordered" },
    { list: "bullet" },
    { indent: "-1" },
    { indent: "+1" },
  ],
  ["link", "image", "video"],
],
};



const ViewQuestions = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 mt-[69px]">
        <Sidebar className="fixed mt-[90px] w-64">
          {" "}
          {/* Set a fixed width for the Sidebar */}
          <SidebarItem icon={<House size={20} />} text="Home" />
          <SidebarItem
            icon={<MessageCircleQuestion size={20} />}
            text="Questions"
            active
          />
          <SidebarItem icon={<UserCircle size={20} />} text="Users" />
          <SidebarItem icon={<Tags size={24} />} text="Tags" />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
          <SidebarItem icon={<ScrollText size={20} />} text="MyQueries" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>

        <div className="main flex-1 flex flex-col">
          {" "}
          {/* Add a margin-left equal to the Sidebar width */}
          <div className="main-container flex flex-col bg-white p-4 w-[100%]">
            {" "}
            {/* Add a small margin to separate */}
            <div className="head-title flex w-[100%] items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#1D2E4D]">
                This is Question title
              </h2>
              <Link to="/all-questions/ask">
                <button className="bg-[#1D2E4D] text-[#FCFDFF] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins text-center h-10 rounded-md hover:bg-[#3368CC] font-normal text-sm">
                  Ask Question
                </button>
              </Link>
            </div>
            
            <div className="main-desc flex w-[100%] mb-4">
              <div className="info flex items-center text-sm">
                <p className="text-gray-400 ">
                  Asked <span className="text-gray-800 mx-[2px]">today</span>{" "}
                </p>
                <p className="text-gray-400 mx-[10px]">
                  Modified <span className="text-gray-800 mx-[2px]">today</span>{" "}
                </p>
                <p className="text-gray-400">
                  Viewed <span className="text-gray-800 mx-[2px]">10 times</span>{" "}
                </p>
              </div>
            </div>

            <hr />

            <div className="all-questions mt-4">
              <div className="all-questions-container flex">
                <div className="all-questions-left font-normal text-gray-600 mr-2">
                  <div className="all-options flex flex-col items-center">
                    <CircleChevronUp size={42} strokeWidth={1}/>
                    <p className="text-xl font-medium my-1">0</p>
                    <CircleChevronDown size={42} strokeWidth={1} className="mb-4"/>
                    <Bookmark size={22} className="mb-2 text-gray-400"/>
                    <History size={22} className="text-gray-400"/>
                  </div>
                </div>

                <div className="question-answer text-gray-800">
                  <p>This is question body Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iure velit doloremque ducimus perspiciatis tempore ipsum facere, quos consequatur amet in, esse numquam suscipit dolores quas? Distinctio quasi unde quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis repudiandae perferendis eligendi facere, quis adipisci error temporibus delectus quaerat debitis omnis, ipsam suscipit obcaecati qui ad a aliquam, saepe et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum adipisci ipsam odio, voluptas aliquam rerum dolorem ducimus quam corporis vero voluptates asperiores esse qui suscipit saepe numquam dolorum? Obcaecati, facere?</p>
                  {/* TAGS */}
                 <div className='flex mb-4 mt-2'>
                    <span className='question-tags my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium'>
                        react
                    </span>
                    <span className='question-tags my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium'>
                        antd
                    </span>
                    <span className='question-tags my-[10px] mx-[2px] py-[3px] px-[8px] bg-gray-200 text-sm rounded-md font-medium'>
                        frontend
                    </span>
                    {/* AUTHOR */}
                 <div className="author flex items-center justify-center ml-auto">
                    <div className='author-details flex items-center justify-center'>
                        <Link className='flex items-center justify-center'>
                        <Avatar size={22}/>
                        <p className='text-[#0151f0d8] hover:text-[#1a4badd8] text-sm mr-1 ml-[2px]'>username</p></Link>
                        <small className='text-gray-500'>Timestamp</small>
                    </div>
                 </div>
                </div>

                <hr />

                <div className="comments my-4 ml-8 text-sm">
                  <div className="comment flex items-center mb-4">
                    This is comment_1 -
                    <span className="mx-1 cursor-pointer text-[#0151f0d8] hover:text-[#1a4badd8] "> username</span>
                    <small>timestamp</small>
                  </div>

                  <div className="comment flex items-center mb-4">
                    This is comment_2 -
                    <span className="mx-1 cursor-pointer text-[#0151f0d8] hover:text-[#1a4badd8] "> username</span>
                    <small>timestamp</small>
                  </div>
                  <hr />

                  <p className="text-gray-400 mt-4 mb-4 text-sm hover:text-[#0151f0d8] cursor-pointer transition-all duration-300" onClick={() => setShow(!show)}>Add a comment</p>
                  {
                    show && (<div className="title">
                      <textarea type="text" placeholder="Input your comments here" className="w-[100%] text-sm border p-2 rounded-md mb-2" rows={5}></textarea>
                      <button className="bg-[#1c60e7d8] text-white p-3 text-sm rounded-md mr-auto hover:bg-[#1a4badd8] transition-all duration-300 ">Add comment</button>
                    </div>)
                  }

                </div>

              </div>
            </div>
                
            <div className="all-questions my-4">
              <p className="text-gray-800 text-lg font-medium">No of answers</p>
              <div className="all-questions mt-4">
              <div className="all-questions-container flex">
                <div className="all-questions-left font-normal text-gray-600 mr-2">
                  <div className="all-options flex flex-col items-center">
                    <CircleChevronUp size={42} strokeWidth={1}/>
                    <p className="text-xl font-medium my-1">0</p>
                    <CircleChevronDown size={42} strokeWidth={1} className="mb-4"/>
                    <Bookmark size={22} className="mb-2 text-gray-400"/>
                    <History size={22} className="text-gray-400"/>
                  </div>
                </div>

                <div className="question-answer text-gray-800">
                  <p>This is answer body Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iure velit doloremque ducimus perspiciatis tempore ipsum facere, quos consequatur amet in, esse numquam suscipit dolores quas? Distinctio quasi unde quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis repudiandae perferendis eligendi facere, quis adipisci error temporibus delectus quaerat debitis omnis, ipsam suscipit obcaecati qui ad a aliquam, saepe et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum adipisci ipsam odio, voluptas aliquam rerum dolorem ducimus quam corporis vero voluptates asperiores esse qui suscipit saepe numquam dolorum? Obcaecati, facere?</p>
                  {/* TAGS */}
                 <div className='flex mb-4 mt-2'>
                   
                    {/* AUTHOR */}
                 <div className="author flex items-center justify-center ml-auto">
                    <div className='author-details flex items-center justify-center'>
                        <Link className='flex items-center justify-center'>
                        <Avatar size={22}/>
                        <p className='text-[#0151f0d8] hover:text-[#1a4badd8] text-sm mr-1 ml-[2px]'>username</p></Link>
                        <small className='text-gray-500'>Timestamp</small>
                    </div>
                 </div>
                </div>

               

                

              </div>
            </div>

               

              </div>
            </div>
           </div>
           <hr />
           
           <div className="main-answer my-4">
            <h3 className="text-gray-800 text-lg font-medium mb-4">Your Answer</h3>
            <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}        
                    className="h-[200px]"     
                  />
           </div>
           <button className="bg-[#1c60e7d8] text-white p-3 text-sm rounded-md mr-auto hover:bg-[#1a4badd8] transition-all duration-300 mt-[62px]">Post your answer</button>

         </div>
       </div>
     </div>
    </div>
  );
};

export default ViewQuestions;
