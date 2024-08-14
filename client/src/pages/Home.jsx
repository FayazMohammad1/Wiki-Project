import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import Footer from "../components/Footer";
import NewsFeed from "../components/NewsFeed";

const Home = () => {
  
  return (
    <div className="flex flex-col align-center items-center">
      <Navbar/>
      <Hero/>
      <Insights/>
      <NewsFeed/>
      <Footer/>
    </div>
  );
};

export default Home;
