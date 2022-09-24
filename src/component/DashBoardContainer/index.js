import React from "react";
import styled from "styled-components";

const DashBoardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DashBoardContainer;

const Container = styled.div`
  padding: 1.875rem;
  width: 100%;
  height: 100vh;
`;
