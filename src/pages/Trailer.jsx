import React from "react";
import Navbar from "../components/Navbar/Navbar";
function Trailer() {
  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh", position: "relative" }}>
        <iframe
          style={{ marginTop: "50px" }}
          controls="0"
          width="100%"
          height="100%"
          loop="1"
          src="https://www.youtube.com/embed/Hs-1_HNALhw?rel=0&modestbranding=1&&showinfo=0&controls=0&loop=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
