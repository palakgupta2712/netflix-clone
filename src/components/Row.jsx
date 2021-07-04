import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { IMG_URL } from "../requests";

function Row({ title, fetchURL }) {
  const [data, setData] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const request = axios
      .get(`${BASE_URL}${fetchURL}`)
      .then((res) => setData(res.data.results));
  }, []);
  return (
    <React.Fragment>
      <Box>
        <Title>{title}</Title>
        <PosterContainer>
          {data.map((item) => (
            <PosterRow key={item.id} to={`${item.id}`}>
              <Poster src={`${IMG_URL}${item.poster_path}`} />
              <PosterTitle>{item.name}</PosterTitle>
            </PosterRow>
          ))}
        </PosterContainer>
      </Box>
    </React.Fragment>
  );
}

export default Row;

const Box = styled.div`
  margin: 10px;
`;

const Title = styled.div`
  font-size: 22px;
  margin-left: 30px;
`;

const PosterContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  gap: 20px;
  margin-left: 10px;
  &::-webkit-scrollbar {
    margin-left: 10px;
    width: 100px;
    height: 5px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: red;
    margin-left: 20px;
    border-radius: 10px;
  }
  scroll-behavior: smooth;
`;

const Poster = styled.img`
  max-height: 300px;
  transition: transform 400ms;
  &:hover {
    transform: scale(1.09);
  }
  cursor: pointer;
`;

const PosterTitle = styled.p`
  padding: 15px;
`;

const PosterRow = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
`;
