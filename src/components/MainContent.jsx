import React from "react";
import Row from "./Row";
import requests from "../requests";

function MainContent() {
  return (
    <React.Fragment>
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

export default MainContent;
