import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Get In On the Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Mystery Movies" fetchURL={requests.fetchMystery} />
      <Row
        title="Children & Family Time"
        fetchURL={requests.fetchChildrenSeries}
      />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Family Movies" fetchURL={requests.fetchFamilyMovies} />
    </React.Fragment>
  );
}

export default App;
