import React from "react";

const Insights = () => {
  const bgImage = {
    backgroundImage: `url("https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/ai/GettyImages-1130019141.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "50%",
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="mt-12 mb-1 px-[92px] text-[#1D2E4D] font-semibold text-4xl font-poppins">
          Featured insights
        </h1>
        <div className="py-8 bg-[#f6f7f8]">
          <div className="container text-black">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-4">
              <div className="md:w-5/12 lg:w-6/12 relative group">
                {/* Image */}
                <img
                  src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/ai/GettyImages-1130019141.jpg"
                  alt="image"
                  className="w-full h-[418px]"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"><a href="#" >
            <p className="text-white pl-10 pt-10 font-medium text-3xl hover:underline">Big tech spending surges on data center buildout</p></a>
            <p className="text-white pl-10 pt-4 font-light text-md mr-auto">AUG 9, 2024 <i class="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum </p>
            
          </div>
                
              </div>

              <div className="md:7/12 lg:w-6/12 ">
              <div className="flex">
                <img
                  src="https://www.moodys.com/web/en/us/images/topic-page-images/climate/1324475166.jpg"
                  alt="image"
                  className="h-32 w-40 mb-2 mt-2"
                />
                <a href="#" >
                <p className="text-[#1D2E4D] m-2 font-medium text-lg hover:underline">Rating actions citing ESG factors are greatest for governments and nonfinancial companies</p>
                <p className="text-[#1D2E4D] m-2 font-light text-sm mr-auto">AUG 9, 2024 <i class="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum </p>
                </a>
                </div>            
                <div className="h-[1px] bg-[#1D2E4D]"></div>


                <div className="flex">
                <img
                  src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/ai/GettyImages-1394131808.jpg"
                  alt="image"
                  className="h-32 w-40 mb-2 mt-2"
                />
                <a href="#" >
                <p className="text-[#1D2E4D] m-2 font-medium text-lg hover:underline">Huge demand for data centers right now masks underlying credit risks</p>
                <p className="text-[#1D2E4D] m-2 font-light text-sm mr-auto">JUL 7, 2024 <i class="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum </p>
                </a>
                </div>
                <div className="h-[0.5px] bg-[#1D2E4D]"></div>


                <div className="flex">
                <img
                  src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/blockchain/GettyImages-1455351918.jpg"
                  alt="image"
                  className="h-32 w-40 mb-2 mt-2"
                />
                <a href="#" >
                <p className="text-[#1D2E4D] m-2 font-medium text-lg hover:underline">Rating actions citing ESG factors are greatest for governments and nonfinancial companies</p>
                <p className="text-[#1D2E4D] m-2 font-light text-sm mr-auto">MAY 23, 2024 <i class="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum </p>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
