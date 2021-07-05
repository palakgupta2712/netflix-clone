import React, { useEffect, useState } from "react";
import axios from "axios";
import requests, { BASE_URL, IMG_URL } from "../requests";
import styled from "styled-components";
import play from "./MovieDetails/play-button.png";

function Banner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const result = await axios.get(
      `${BASE_URL}${requests.fetchNetflixOriginals}`
    );
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
            <TrailerButton>
              <img src={play} height="12px" />
              &nbsp; Trailer
            </TrailerButton>
            <AddButton>+</AddButton>
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

const TrailerButton = styled.button`
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 15px;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  color: white;
  font-size: 28px;
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
