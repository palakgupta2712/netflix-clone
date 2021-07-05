import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainContent from "../components/MainContent";
import Banner from "../components/Banner";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <MainContent />
    </React.Fragment>
  );
}

export default Home;
