import React from "react";
import Navbar from "../components/Navbar/Navbar";
function Trailer() {
  return (
    <div>
      <Navbar />
      <div style={{ height: "calc(100vh - 60px)" }}>
        <iframe
          controls="0"
          width="100%"
          height="100%"
          loop="1"
          src="https://www.youtube.com/embed/Hs-1_HNALhw?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&loop=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
