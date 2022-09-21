import React from "react";
import styled from "styled-components";

const BoxContainer = ({ children }) => {
  //const componentCheck = children.includes();

  return <Container>{children}</Container>;
};

export default BoxContainer;

const Container = styled.section`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex: 1;
`;
