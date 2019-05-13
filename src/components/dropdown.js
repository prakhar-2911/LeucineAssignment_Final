import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import Label from './label';
import Wrapper from './wrapper';
import Error from './error';

const StyledSelect = styled(Select)`
  margin-top: 0.5rem;
`;

function Dropdown({ label, options, handleChange, field, form, ...props }) {
  const error = form.touched[field.name] && form.errors[field.name];
  return (
    <Wrapper fluid>
      <Label>{label}</Label>
      <StyledSelect
        {...field}
        {...form}
        options={options}
        onChange={option => {
          const {
            analytical_method_id,
            target_residue_type,
            reason
          } = form.values;
          form.resetForm({
            analytical_method_id,
            target_residue_type,
            reason
          });
          form.setFieldValue(field.name, option.value);
        }}
        onBlur={() => form.setFieldTouched(field.name)}
        value={
          options
            ? options.find(option => option.value === field.value) || null
            : ''
        }
      />
      <Error>{error}</Error>
    </Wrapper>
  );
}

export default Dropdown;
