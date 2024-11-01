import styled from 'styled-components';

type ImageSectionProps = {
  name: string;
  size?: string;
  title: string;
  onClick?: () => void;
};

const ImageSection = ({ name, size = '', title, onClick }: ImageSectionProps) => {
  const imgName = `${name} ${size}`;
  return (
    <ImageBox onClick={onClick}>
      <i className={imgName} />
      <span>{title}</span>
    </ImageBox>
  );
};

export default ImageSection;

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
