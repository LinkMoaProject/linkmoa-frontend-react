import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  opacity: 0.6;
  color: #000;
  font-weight: 600;
  i {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #f0f0ee;
    opacity: 1;
  }
`;

function ImageSection({ name, size, title }) {
  const imgName = `${name} ${size}`;
  return (
    <ImageBox>
      <span>
        <i className={imgName}></i>
        {title}
      </span>
    </ImageBox>
  );
}

ImageSection.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageSection;
