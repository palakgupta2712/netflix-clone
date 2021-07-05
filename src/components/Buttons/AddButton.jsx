import React from "react";
import styled from "styled-components";

function AddButton() {
  return <Button>+</Button>;
}

export default AddButton;

const Button = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  color: white;
  font-size: 28px;
  &:hover {
    background-color: #181818;
  }
`;
