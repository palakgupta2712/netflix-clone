import React from "react";
import bg from "../assests/bg.png";
import Introduction from "../components/Introduction";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Join() {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          objectFit: "fill",
        }}
      >
        <Container>
          <Link to="/">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              height="30px"
            />
          </Link>
          <Button>Sign In</Button>
        </Container>
        <Introduction />
      </div>
    </React.Fragment>
  );
}

export default Join;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 90px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  margin: 10px 4px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 10px;
  }
  background-color: #e20813;
  &:hover {
    background-color: red;
  }
  font-size: 16px;
`;
