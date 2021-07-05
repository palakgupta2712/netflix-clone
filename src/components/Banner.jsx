import React, { useEffect, useState } from "react";
import axios from "axios";
import requests, { BASE_URL, IMG_URL } from "../requests";
import styled from "styled-components";
import play from "./MovieDetails/play-button.png";
import { Link } from "react-router-dom";
import AddButton from "./Buttons/AddButton";
import TrailerButton from "./Buttons/TrailerButton";

function Banner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const result = await axios.get(`${BASE_URL}${requests.fetchActionMovies}`);
    setData(
      result.data.results[
        Math.floor(Math.random() * result.data.results.length)
      ]
    );
  }
  return (
    <React.Fragment>
      <Background>
        <BgImage src={`${IMG_URL}${data.backdrop_path}`} />
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "16px",
            margin: "50px",
          }}
        >
          <Title>{data.name}</Title>
          <Overview>{data.overview}</Overview>
          <ButtonGroup>
            <TrailerButton />
            <AddButton />
          </ButtonGroup>
        </div>
      </Background>
    </React.Fragment>
  );
}

export default Banner;

const Title = styled.h1`
  font-size: 60px;
`;

const Overview = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Background = styled.div`
  position: relative;
  img {
  }
`;

const BgImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 600px;
  opacity: 0.3;
`;

const ButtonGroup = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;
