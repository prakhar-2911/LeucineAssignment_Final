import React from 'react';
import styled from 'styled-components';
import Label from './label';
import Wrapper from './wrapper';
import Error from './error';

const RadioContainer = styled.div`
  color: black;
  margin-top: 0.5rem;
  min-height: 40px;
  display: flex;
  align-items: center;
`;

function RadioGroup({ fluid, label, children, error }) {
  return (
    <Wrapper fluid={fluid}>
      <Label error={error}>{label}</Label>
      <RadioContainer>{children}</RadioContainer>
      <Error>{error}</Error>
    </Wrapper>
  );
}

export default RadioGroup;