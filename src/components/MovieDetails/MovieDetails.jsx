import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_KEY, IMG_URL } from "../../requests";
import ButtonGroup from "./ButtonGroup";

function MovieDetails() {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const [details, setDetails] = useState([]);
  const [creators, setCreators] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setDetails(res.data);
      setCreators(res.data.created_by);
      setGenres(res.data.genres);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Background>
          <img src={`${IMG_URL}${details.backdrop_path}`} />
        </Background>
        <Details>
          <Title>{details.name && details.name.toUpperCase()}</Title>
          <SubTitle> {details.original_name}</SubTitle>

          <Box>
            <p>
              {details.first_air_date && details.first_air_date.split("-")[0]}
              &nbsp;
            </p>
            |<p> &nbsp;{details.number_of_seasons} Seasons &nbsp;</p> |&nbsp;
            {genres.map((item) => (
              <p> &bull; {item.name} &nbsp;</p>
            ))}
          </Box>
          <Overview>{details.overview}</Overview>
          <Box>
            <span style={{ color: "#8DA3A3" }}>Creator(s):</span>
            {creators.map((item) => (
              <p>&nbsp; {item.name} &nbsp;</p>
            ))}
          </Box>
          <ButtonGroup />
        </Details>
      </Container>
    </React.Fragment>
  );
}

export default MovieDetails;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
`;
const SubTitle = styled.h2`
  padding: 20px 0px;
`;

const Box = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-wrap: wrap;
`;

const Overview = styled.div`
  padding: 10px 0px;
`;

const Details = styled.div`
  background: linear-gradient(
    90deg,
    #181818 0%,
    #181818 50%,
    rgba(70, 64, 70, 0) 100%
  );
  @media (min-width: 700px) {
    width: 50%;
  }
  min-height: calc(100vh - 60px);
  padding: 60px;
`;
