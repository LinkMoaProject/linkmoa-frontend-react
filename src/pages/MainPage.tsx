import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import GeneralPageBox from '../components/GeneralPageBox';

const MainPage = () => {
  return (
    <MainLayout>
      <div className="left-menu">
        <Link className="left-menu__home" to="/">
          <i className="fa-solid fa-house" />
          <span className="left-menu__home-title">linkmoa</span>
        </Link>
        <ImageSection name="fa-solid fa-magnifying-glass" title="검색" />
        <ImageSection name="fa-solid fa-box-open" title="수신함" />
        <ParentPageBox>즐겨찾기</ParentPageBox>
        {/* foreach */}
        <GeneralPageBox imgName="fa-regular fa-star" title="링크모아" />
        <GeneralPageBox imgName="fa-solid fa-music" title="내 음악" />
        <ParentPageBox>개인 페이지</ParentPageBox>
        {/* foreach */}
        <GeneralPageBox imgName="fa-solid fa-user-lock" title="개인 정보" />
        <GeneralPageBox imgName="fa-solid fa-music" title="내 음악" />
        <GeneralPageBox imgName="" title="메모장" />
        <ParentPageBox>공유 페이지</ParentPageBox>
        {/* foreach */}
        <GeneralPageBox imgName="fa-regular fa-star" title="링크모아" />
      </div>
      <div className="main-page">
        <span className="main-page__full-path">
          <i className="fa-regular fa-star" /> 링크모아
        </span>
        <div className="main-page__content">
          <span className="main-page__title">링크모아</span>
          <div className="main-page__directory-new">
            <i className="fa-solid fa-plus fa-3x" />
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

  .left-menu__home {
    margin: 10px;
    font-size: 20px;
  }
  .left-menu__home-title {
    text-transform: uppercase;
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
      background-color: var(--gray-100);
    }
    &:hover i {
      color: #c3c6d1;
    }
  }

  .main-page__directory-new i {
    color: var(--gray-100);
  }
`;

const ParentPageBox = styled.div`
  margin-top: 20px;
  padding: 0 10px;
  border-radius: 5px;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: var(--gray-100);
    opacity: 1;
  }
`;

export default MainPage;
