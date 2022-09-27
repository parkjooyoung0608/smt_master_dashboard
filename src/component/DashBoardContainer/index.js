import React from "react";
import styled, { css } from "styled-components";

const DashBoardContainer = ({ children, isTablet }) => {
  return <Container isTablet={isTablet}>{children}</Container>;
};

export default DashBoardContainer;

const Container = styled.div`
  padding: 1.875rem;
  padding-top: 1rem;
  width: 100%;
  height: 100vh;

  ${props =>
    props.isTablet &&
    css`
      height: inherit;
    `}
`;
