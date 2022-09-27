import React from "react";
import styled, { css } from "styled-components";

const BoxContainer = ({ children, title }) => {
  return (
    <Container allDataProtectionStatus={title === "그룹 전체 데이터 보호 현황"}>
      {children}
    </Container>
  );
};

export default BoxContainer;

const Container = styled.section`
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-radius: 0.313rem;

  ${props =>
    props.allDataProtectionStatus &&
    css`
      flex: 0.6;
    `}
`;
