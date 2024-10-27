import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  opacity: 0.6;
  color: #000;
  font-weight: 600;
  padding: 0 10px;
  height: 30px;
  i {
    width: 20px;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--gray-100);
    opacity: 1;
  }
`;

const ImageSection = ({ name, size = '', title }) => {
  const imgName = `${name} ${size}`;
  return (
    <ImageBox>
      <i className={imgName} />
      <span>{title}</span>
    </ImageBox>
  );
};

ImageSection.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageSection;
