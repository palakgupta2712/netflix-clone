import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainContent from "../components/MainContent";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
