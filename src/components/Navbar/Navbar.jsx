import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <Container>
        <LogoContainer to="/">
          <Logo
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="netflix-logo"
          />
          <MobileLogo src={logo} alt="netflix-mobile-logo" />
        </LogoContainer>
        <Text>UNLIMITED TV SHOWS & MOVIES</Text>
        <JoinNowButton>JOIN NOW</JoinNowButton>
        <SignInButton>SIGN IN</SignInButton>
      </Container>
    </React.Fragment>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 30px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  margin: 10px 0px;
  margin-left: -15px;
  width: 90px;
  height: 45px;
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoContainer = styled(Link)`
  flex-grow: 1;
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
`;

const JoinNowButton = styled(Button)`
  background-color: #e20813;
  &:hover {
    background-color: red;
  }
`;

const SignInButton = styled(Button)`
  background-color: transparent;
  border: 1px solid white;
  margin-right: 30px;
  &:hover {
    background-color: #2d2d2d;
  }
`;

const Text = styled.p`
  font-size: 13px;
  margin-right: 5px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
