import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  width: 100%;
  text-align: center;
`;

const StyledInput = styled.input`
  border: 1px black solid;
  border-radius: 2px;
  margin-left: 5px;
`;

export default function SearchForm(props) {
  return (
    <FormContainer>
      <form>
        <label>Search Character by Name:</label>
        <StyledInput
          id="name"
          type="text"
          name="textfield"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </form>
    </FormContainer>
  );
}
