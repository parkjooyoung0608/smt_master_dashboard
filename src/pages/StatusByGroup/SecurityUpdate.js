import React from "react";
import styled from "styled-components";

const SecurityUpdate = () => {
  return (
    <Container>
      <FlexBox>
        icon
        <span>업데이트 필요</span>
        <span>14</span>
      </FlexBox>
    </Container>
  );
};

export default SecurityUpdate;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 10%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 20px;
`;
