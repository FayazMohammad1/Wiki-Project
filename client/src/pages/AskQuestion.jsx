import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar, { SidebarItem } from "../components/Sidebar";
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
  CircleX
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


const TagsInput = props => {
  const [tags, setTags] = useState([]);
  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  }
  const addTags = event => {
    if(event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selected([...tags, event.target.value]);
      event.target.value = "";
    }
  }
  return (
    <div className="tags-input flex flex-col md:flex md:flex-row items-start md:items-center md:flex-wrap min-h-12 w-[100%] py-0 px-2 border rounded-md text-xs border-gray-300 focus-within:border-[2px] focus-within:border-gray-700 justify-center ">
                    <ul className="flex">
                      {
                        tags.map((tag, index) => <li key={index} className="flex p-2 items-center justify-center bg-[#1c60e7d8] ml-1 text-white gap-1 rounded-md">
                        <span>{tag}</span>
                        <CircleX size={16} onClick={() => removeTags(index)}/>
                      </li>)
                      }
                    </ul>
                    <input type="text" placeholder="Press enter to add tags" className="flex flex-col flex-wrap md:flex md:flex-1 border-none h-[46px] text-[12px] p-1 focus:outline-none" onKeyUp={e => e.key ==="Enter" ? addTags(e) : null}/>
                  </div>

  )
}


const AskQuestion = () => {
  const selected = tags => console.log(tags);

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 mt-[69px]">
        <Sidebar className="fixed mt-[90px] w-64 z-10">
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

        <div className="add-question flex-1 flex flex-col ">
          {" "}
          {/* Add a margin-left equal to the Sidebar width */}
          <div className="add-question-container flex flex-col bg-white p-4 w-[100%]">
            {" "}
            {/* Add a small margin to separate */}
            <div className="head-title flex w-[100%] items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#1D2E4D]">
                Ask a public question{" "}
              </h2>
            </div>
            <div className="flex flex-col w-[100%] border p-5 rounded-md border-[#5f8bdc] bg-blue-50 mb-4">
              <h3 className="heading text-lg mb-2 text-gray-800 font-[500]">
                Writing a good question
              </h3>
              <p className="text-sm mb-4">
                You’re ready to ask a programming-related question and this form
                will help guide you through the process.
              </p>
              <h4 className="text-base font-semibold text-gray-900 mb-2">
                Steps
              </h4>
              <ul className="list-disc ml-8 text-sm">
                <li className="mb-1">
                  Summarize your problem in a one-line title.
                </li>
                <li className="mb-1">Describe your problem in more detail.</li>
                <li className="mb-1">
                  Describe what you tried and what you expected to happen.
                </li>
                <li className="mb-1">
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li className="mb-1">
                  Review your question and post it to the site.
                </li>
              </ul>
            </div>
            <div className="question-container ">
              <div className="question-options ">
                <div className="question-option flex flex-col w-[100%] border p-5 rounded-md border-gray-200 mb-4 shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Title
                  </h3>
                  <small className="mb-2">
                    Be specific and imagine you’re asking a question to another
                    person.
                  </small>
                  <input
                    type="text"
                    placeholder="e.g. What is spread operator in JavaScript?"
                    className="border p-2 text-xs border-gray-300 rounded-md"
                  />
                </div>

                <div className="question-option flex flex-col w-[100%] border p-5 rounded-md border-gray-200 mb-4 shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    What are the details of your problem?
                  </h3>
                  <small className="mb-2">
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                  </small>
                  {/* <input type="text" placeholder='e.g. What is spread operator in JavaScript?' className='border p-2 text-xs border-gray-300 rounded-md'/> */}
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules} 
                    
                  />
                </div>

                <div className="question-option flex flex-col w-[100%] border p-5 rounded-md border-gray-200 mb-4 shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    What did you try and what were you expecting?
                  </h3>
                  <small className="mb-2">
                    Describe what you tried, what you expected to happen, and
                    what actually resulted. Minimum 20 characters.
                  </small>
                  {/* <input
                    type="text"
                    placeholder="e.g. What is spread operator in JavaScript?"
                    className="border p-2 text-xs border-gray-300 rounded-md"
                  /> */}
                  <ReactQuill
                    theme="snow"
                    value={value2}
                    onChange={setValue2}
                    modules={modules}
                  />
                </div>

                <div className="question-option flex flex-col w-[100%] border p-5 rounded-md border-gray-200 mb-4 shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Tags
                  </h3>
                  <small className="mb-2">
                    Add up to 5 tags to describe what your question is about.
                  </small>
                  <TagsInput className="flex flex-col" selected={selected}/>
                  {/* <TagsInput /> */}
                </div>
              </div>
            </div>
            <div className="">
            <button className="bg-[#1c60e7d8] text-white p-3 text-sm rounded-md mr-2 hover:bg-[#1a4badd8] transition-all duration-300">Post question</button>
            <button className="bg-transparent text-red-700 w-auto p-3 text-sm rounded-md hover:bg-red-50 transition-all duration-300">Discard draft</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
