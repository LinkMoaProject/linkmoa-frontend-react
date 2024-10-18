import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const onLogin = () => {
  console.log("===== step1) Call Backend Login href =====");
  // window.location.href = "/login";
};

const Home = () => {
  return (
    <StyledHome>
      <header>
        <span>Welcome to the LinkMoa!</span>
        <span>Please login to use...</span>
      </header>
      <Link to="/mainpage">
        <Button type="button" onClick={onLogin}>
          Login
        </Button>
      </Link>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    margin-bottom: 20px;
  }

  span {
    display: block;
    margin-bottom: 10px;
    &:first-child {
      font-size: 32px;
      font-weight: 600;
    }
  }
`;

export default Home;
