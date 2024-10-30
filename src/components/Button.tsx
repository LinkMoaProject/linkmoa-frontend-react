import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  color?: string;
  background?: string;
  primary?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ color = 'white', background = '#3498db', primary = false, ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} background={background} primary={primary} {...props}>
      Login
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 0.6em;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || '#3498db'};

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

export default Button;
