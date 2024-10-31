import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const GeneralPageBox = ({ imgName = 'fa-regular fa-file-lines', title = 'Untitled' }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const customImgName = imgName || 'fa-regular fa-file-lines';
  const imgNameByHover = isHovered ? 'fa-solid fa-angle-right' : customImgName;
  const handleMouseOver = () => {
    setIsHovered((cur) => !cur);
  };

  const handleMouseOut = () => {
    setIsHovered((cur) => !cur);
  };
  return (
    <GeneralPageLayout onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="general-page__icon">
        <i className={imgNameByHover} />
      </div>
      <div className="general-page__title">
        <span>{title}</span>
        <div className="general-page__more">
          <i className="fa-solid fa-ellipsis fa-lg" />
        </div>
      </div>
    </GeneralPageLayout>
  );
};

const GeneralPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  opacity: 0.6;
  height: 30px;
  padding: 0 10px;
  i {
    color: var(--gray);
    width: 20px;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--gray-200);
    .general-page__more {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
    }
  }
  .general-page__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
  }
  .general-page__icon:hover {
    cursor: pointer;
    background-color: var(--gray-300);
    opacity: 1;
    border-radius: 5px;
  }
  .general-page__title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .general-page__more {
    display: none;
  }
  .general-page__more:hover {
    cursor: pointer;
    background-color: var(--gray-300);
    border-radius: 5px;
  }
`;

GeneralPageBox.propTypes = {
  imgName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GeneralPageBox;
