import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Label from './label';
import Error from './error';

const StyledInput = styled.input`
  display: block;
  border-radius: 2px;
  border: solid 1px #cacad3;
  display: block;
  height: 30px;
  line-height: 1.4;
  margin-top: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;

function Input({
  label,
  fluid,
  inputType,
  pattern = '',
  min = '',
  field,
  form: { touched, errors }
}) {
  const error = touched[field.name] && errors[field.name];
  return (
    <Wrapper fluid={fluid}>
      <Label>
        {label}
        <StyledInput
          type={inputType || 'text'}
          pattern={pattern}
          min={min}
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value || ''}
        />
      </Label>
      <Error>{error}</Error>
    </Wrapper>
  );
}

export default Input;
