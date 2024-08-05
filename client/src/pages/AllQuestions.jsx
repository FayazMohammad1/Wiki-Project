import React, { useState } from 'react';
import Sidebar, { SidebarItem } from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {
  LifeBuoy,
  UserCircle,
  Settings,
  MessageCircleQuestion,
  Tags,
  House,
  Bell,
  ScrollText,
  Filter
} from 'lucide-react';
import Questions from '../components/Questions';

const AllQuestions = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 mt-[69px]">
        <Sidebar className="fixed mt-[90px] w-64"> {/* Set a fixed width for the Sidebar */}
          <SidebarItem icon={<House size={20} />} text="Home" />
          <SidebarItem icon={<MessageCircleQuestion size={20} />} text="Questions" active />
          <SidebarItem icon={<UserCircle size={20} />} text="Users" />
          <SidebarItem icon={<Tags size={24} />} text="Tags" />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
          <SidebarItem icon={<ScrollText size={20} />} text="MyQueries" />
          <hr className='my-3' />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        
        <div className="main flex-1 flex flex-col"> {/* Add a margin-left equal to the Sidebar width */}
          <div className="main-container flex flex-col bg-white p-4 w-[100%]"> {/* Add a small margin to separate */}
            <div className="main-top flex w-[100%] items-center justify-between mb-2">
              <h2 className='text-xl font-semibold text-[#1D2E4D]'>All Questions</h2>
              <Link to='/all-questions/ask'>
                <button className="bg-[#1D2E4D] text-[#FCFDFF] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins text-center h-10 rounded-md hover:bg-[#3368CC] font-normal text-sm">Ask Question</button>
              </Link>
            </div>

            <div className='main-description flex flex-row items-center text-[1rem] text-[#666D77] justify-between pb-2 mt-2'>
              <p>No of questions</p>
              <div className='main-filter md:flex hidden items-center'>
                <div className="main-tabs flex border-2 rounded-lg mr-5">
                  <div className="main-tab p-2 text-sm hover:bg-gray-100 transition-all duration-300 bg-gray-200">
                    <Link>Newest</Link>
                  </div>
                  <div className="main-tab p-2 text-sm hover:bg-gray-100 transition-all duration-300">
                    <Link>Active</Link>
                  </div>
                  <div className="main-tab p-2 text-sm hover:bg-gray-100 transition-all duration-300">
                    <Link>More</Link>
                  </div>
                  
                </div>
                <div className="main-filter-item flex items-center p-[6px] border-2 rounded-lg text-sm border-[#3368CC] text-[#3368CC] cursor-pointer hover:bg-blue-100 transition-all duration-300">
                    <Filter size={14}/><p className='ml-1'>Filter</p>
                  </div>
              </div>

              
            </div>
            <div className="questions flex flex-col w-[100%]">
                <div className="question flex flex-col py-[15px] border-b-2 w-[100%]">
                  <Questions />
                  <Questions />
                  <Questions />
                  <Questions />
                  <Questions />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
