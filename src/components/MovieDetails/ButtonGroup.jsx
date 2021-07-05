import React from "react";
import styled from "styled-components";
import play from "./play-button.png";
import { Link } from "react-router-dom";

function ButtonGroup() {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/trailer">
        <Button>
          <img src={play} height="12px" />
          &nbsp; Trailer
        </Button>
      </Link>

      <AddButton>+</AddButton>
    </div>
  );
}

export default ButtonGroup;

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
