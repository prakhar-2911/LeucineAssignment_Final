import styled, { css } from 'styled-components';
 
const Wrapper = styled.div`
  padding: 0.75rem 0;
  display: inline-flex;
  flex: 1 1 50%;
  max-width: calc(50% - 1rem);
  flex-direction: column;
  text-align: left;
 
  ${props =>
    props.fluid &&
    css`
      flex: 1 1 100%;
      max-width: 100%;
    `};
`;
 
export default Wrapper;