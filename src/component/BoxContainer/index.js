import React from "react";
import styled from "styled-components";

const BoxContainer = ({ children }) => {
  //const componentCheck = children.includes();

  return <Container>{children}</Container>;
};

export default BoxContainer;

const Container = styled.section`
  flex: 1;
  padding: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-radius: 0.313rem;
`;
