import React from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label`
  margin-right: 1.5rem;
  color: black;
  input {
    margin-right: 0.5rem;
  }
`;

function RadioInput({ id, label, handleClick, field, form }) {
  return (
    <RadioLabel htmlFor={id}>
      <input
        checked={id === field.value}
        id={id}
        name={field.name}
        onChange={event => {
          if (handleClick) {
            handleClick(event);
          }
          form.setFieldValue(field.name, event.target.value);
        }}
        type="radio"
        value={id}
      />
      {label}
    </RadioLabel>
  );
}

export default RadioInput;
