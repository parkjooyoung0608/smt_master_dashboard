import React from "react";
import styled from "styled-components";

const ExpiryPeriod = () => {
  return (
    <Container>
      <Title>49일 지남</Title>
      <Period>~2022.08.01</Period>
    </Container>
  );
};

export default ExpiryPeriod;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;

const Period = styled.p`
  color: grey;
`;
