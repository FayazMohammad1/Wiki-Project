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
      <div className="flex flex-col 2xl:ml-auto 2xl:mr-auto">
        <h1 className="mt-12 ml-4 md:ml-16 lg:ml-24 xl:ml-28 2xl:ml-80 text-[#1D2E4D] font-semibold text-2xl lg:text-4xl font-poppins">
          Featured insights
        </h1>
        <div className="py-4 bg-[#f6f7f8] justify-center items-center 2xl:ml-52">
          <div className="container mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-28 text-black">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-4">
              <div className="w-[90%] md:w-[80%] relative group">
                {/* Image */}
                <img
                  src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/ai/GettyImages-1130019141.jpg"
                  alt="image"
                  className="w-[100%] md:h-[98%] md:w-[100%] h-[10%] lg:h-[418px] xl:w-[100%] xl:h-[420px] 2xl:w-[90%]"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="#">
                    <p className="text-white p-5 md:pl-10 md:pt-10 font-medium text-lg md:text-2xl lg:text-3xl hover:underline">
                      Big tech spending surges on data center buildout
                    </p>
                  </a>
                  <p className="text-white md:pl-5 font-light text-sm md:text-md mr-auto ml-5 -mt-2">
                    AUG 9, 2024 <i className="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum
                  </p>
                </div>
              </div>

              <div className="w-10/12 md:w-10/12 ">
                <div className="md:flex md:flex-row flex flex-col-reverse w-[108%] md:w-[90%] xl:w-[95%] 2xl:w-[90%] 2xl:-ml-20">
                  <img
                    src="https://www.moodys.com/web/en/us/images/topic-page-images/climate/1324475166.jpg"
                    alt="image"
                    className="md:h-32 md:w-40 mb-2 mt-2 md:mt-0 xl:mt-2 w-[100%] h-[10%]"
                  />
                  <a href="#">
                    <p className="text-[#1D2E4D] md:m-2 md:w-80 lg:w-[100%] md:mt-0 xl:mt-1 font-medium text-md md:text-md lg:text-lg hover:underline">
                      Rating actions citing ESG factors are greatest for governments and nonfinancial companies
                    </p>
                    <p className="text-[#1D2E4D] my-1 md:m-2 font-light text-xs md:text-xs lg:text-sm md:ml-2 mr-auto">
                      AUG 9, 2024 <i className="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum
                    </p>
                  </a>
                </div>
                <div className="h-[1px] bg-[#1D2E4D] w-[108%] md:w-[80%] xl:w-[95%] 2xl:w-[90%] 2xl:-ml-20"></div>

                <div className="md:flex md:flex-row flex flex-col-reverse w-[108%] md:w-[85%] xl:w-[95%] 2xl:w-[90%] 2xl:-ml-20">
                  <img
                    src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/ai/GettyImages-1394131808.jpg"
                    alt="image"
                    className="md:h-32 md:w-40 mb-2 mt-2 w-[100%] h-[10%] md:mt-2"
                  />
                  <a href="#">
                    <p className="text-[#1D2E4D] md:m-2 md:w-80 lg:w-[100%] xl:mt-1 font-medium text-md md:text-md lg:text-lg hover:underline mt-4 md:mt-2">
                      Huge demand for data centers right now masks underlying credit risks
                    </p>
                    <p className="text-[#1D2E4D] my-1 md:m-2 font-light text-xs md:text-sm mr-auto">
                      JUL 7, 2024 <i className="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum
                    </p>
                  </a>
                </div>
                <div className="h-[1px] bg-[#1D2E4D] w-[108%] md:w-[80%] xl:w-[95%] 2xl:w-[90%] 2xl:-ml-20"></div>

                <div className="md:flex md:flex-row flex flex-col-reverse w-[108%] md:w-[85%] xl:w-[95%] 2xl:w-[90%] 2xl:-ml-20">
                  <img
                    src="https://www.moodys.com/web/en/us/images/topic-page-images/digital-transformation/blockchain/GettyImages-1455351918.jpg"
                    alt="image"
                    className="md:h-32 md:w-40 mb-2 mt-2 w-[100%] h-[10%] md:mt-2"
                  />
                  <a href="#">
                    <p className="text-[#1D2E4D] md:m-2 md:w-80 lg:w-[100%] xl:mt-1 font-medium text-md md:text-md lg:text-lg hover:underline mt-4">
                      Rating actions citing ESG factors are greatest for governments
                    </p>
                    <p className="text-[#1D2E4D] my-1 md:m-2 font-light text-xs md:text-sm mr-auto">
                      MAY 23, 2024 <i className="ri-rectangle-fill text-sm ml-1 mr-1"></i> Lorem Ipsum
                    </p>
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
