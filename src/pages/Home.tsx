import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const onLogin = () => {
  console.log('===== Login step1) href call to backend =====');
  console.log('> URL: ', process.env.BACKEND_LOGIN_HREF_URL);
  window.location.href = process.env.BACKEND_LOGIN_HREF_URL || 'http://localhost:8080/login';
};

const Home = () => {
  return (
    <StyledHome>
      <header>
        <span>Welcome to the LinkMoa!</span>
        <span>Please login to use...</span>
      </header>
      {/* <Link to="/mainpage"> */}
      <Button type="button" onClick={onLogin}>
        Login
      </Button>
      {/* </Link> */}
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
