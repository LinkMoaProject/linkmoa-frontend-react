import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";

const MainPage = () => {
  // const getAccessToken = () => {
  //   console.log("> get access token");
  // };
  useEffect(() => {
    console.log("===== step3) Login href =====");
    // cookie: refreshToken
    // header: accessToken
    // getAccessToken();
  }, []);
  return (
    <MainLayout>
      <div className="left-menu">
        <Link to="/">
          <i className="fa-solid fa-house fa-lg"></i>
        </Link>
        {/* <span>Left Menu</span> */}
        <ImageSection
          name="fa-solid fa-magnifying-glass"
          size="fa-lg"
          title="검색"
        />
        <ImageSection name="fa-solid fa-box-open" title="수신함" />
        <ParentPageBox>즐겨찾기</ParentPageBox>
        <ParentPageBox>개인 페이지</ParentPageBox>
        <ParentPageBox>공유 페이지</ParentPageBox>
      </div>
      <div className="main-page">
        <span className="main-page__full-path">⭐️ 링크모아</span>
        <div className="main-page__content">
          <span className="main-page__title">링크모아</span>
          <div className="main-page__directory-new">
            <i className="fa-solid fa-plus fa-3x"></i>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const MainLayout = styled.main`
  display: flex;
  height: 100vh;

  .left-menu {
    min-width: 270px;
    background-color: #f7f7f5;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #f0f0f0;
    padding: 10px;
  }
  .left-menu span {
    padding: 10px;
  }

  .main-page {
    padding: 20px;
  }

  .main-page__full-path {
    display: block;
    margin-bottom: 100px;
    font-size: 18px;
  }

  .main-page__title {
    display: block;
    font-size: 42px;
    font-weight: 700;
  }

  .main-page__content {
    margin: 0 40px;
  }

  .main-page__directory-new {
    margin-top: 20px;
    padding: 40px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #f0f0ee;
    }
    &:hover i {
      color: #c3c6d1;
    }
  }

  .main-page__directory-new i {
    color: #f0f0ee;
  }
`;

const ParentPageBox = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.6;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: #f0f0ee;
    opacity: 1;
  }
`;

export default MainPage;
