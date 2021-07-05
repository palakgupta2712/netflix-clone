import React from "react";
import styled from "styled-components";

function Introduction() {
  return (
    <React.Fragment>
      <Intro>
        <Heading>Unlimited movies, TV shows and more. </Heading>
        <SubHeading>Watch anywhere. Cancel anytime.</SubHeading>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Box>
          <Input placeholder="Email Address" /> <Button>Get Started </Button>
        </Box>
      </Intro>
    </React.Fragment>
  );
}

export default Introduction;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 300px;
  flex-wrap: wrap;
  gap: 17px;
  text-align: center;
  @media (max-width: 1200px) {
    padding: 50px 100px;
  }
  @media (max-width: 300px) {
    padding: 10px 10px;
  }
`;

const Heading = styled.h1`
  font-size: 54px;
  text-align: center;
`;

const SubHeading = styled.h3``;

const Input = styled.input`
  padding: 10px;
  font-size: 12px;
  outline: none;
  width: 400px;
  &:placeholder-shown {
    font-size: 12px;
  }
`;

const Box = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  outline: none;
  border: none;
  color: white;
  background-color: #e20813;
  &:hover {
    background-color: red;
  }
`;
