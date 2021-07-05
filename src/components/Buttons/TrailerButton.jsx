import React from "react";
import styled from "styled-components";
import play from "../MovieDetails/play-button.png";
import { Link } from "react-router-dom";

function TrailerButton() {
  return (
    <React.Fragment>
      <Link to="/trailer">
        <Button>
          <img src={play} height="12px" />
          &nbsp; Trailer
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default TrailerButton;

const Button = styled.button`
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 15px;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-right: 24px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
