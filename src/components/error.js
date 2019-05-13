import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: #912d2b;
  font-size: 12px;
  height: 16px;
  padding-top: 8px;
`

function Error({ children }) {
  return <ErrorMessage>{children}</ErrorMessage>
}

export default Error;