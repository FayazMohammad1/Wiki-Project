import React from "react";
import "../assets/css/styles.css";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url("https://www.moodys.com/web/en/us/images/topic-page-images/Data-Center-Banner.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full mt-16 " style={bgImage}>
        <div
          className="min-h-[550px] sm:min-h-[600px] md:w-full flex justify-center items-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 100%)",
          }}
        >
          <div className="container pb-8 sm:pb-0 md:-ml-44 lg:ml-24">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Text content section */}
              <div
                data-aos="zoom-out"
                data-aos-duration="400"
                data-aos-once="true"
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              >
                <h1 className="text-xl sm:text-2xl lg:text-3xl ml-4 mr-4 md:ml-16 lg:ml-0 font-semibold text-white">
                  GenAI powers new early warning system as uncertainty surrounds
                  commercial real estate
                </h1>
                <p className="text-md text-white mb-3 ml-4 mr-4 md:ml-16 lg:ml-0">
                  We introduce capability to determine when breaking news may
                  impact lender and investor portfolios.
                </p>
                <div>
                  <button className="text-[#1D2E4D] bg-white hover:bg-[#3368CC] hover:text-white transition-colors duration-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-md px-4 py-2.5 mr-5 focus:outline-none ml-4 md:ml-16 lg:ml-0">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
