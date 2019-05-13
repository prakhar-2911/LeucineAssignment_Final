import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: white;
  color: ${props => (props.primary ? '#db2828' : '#3f51b5')};

  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid ${props => (props.primary ? '#db2828' : '#3f51b5')};
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  width: 100%;
  ${props => props.big && css`
    padding: 1rem;
    font-size: 1rem;
  `}
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
