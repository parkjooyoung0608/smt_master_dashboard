import React from "react";
import styled from "styled-components";

const PolicyChangeStatus = () => {
  return (
    <Container>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#111735" />
          <span>데이터 정책</span>
        </DisplayFlex>
        <span>0</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#223781" />
          <span>시스템</span>
        </DisplayFlex>
        <span>0</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#3E5B7D" />
          <span>운영환경</span>
        </DisplayFlex>
        <span>0</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#7AADDD" />
          <span>계정</span>
        </DisplayFlex>
        <span>0</span>
      </FlexBox>
    </Container>
  );
};

export default PolicyChangeStatus;

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
`;

const DisplayFlex = styled.div`
  display: flex;
`;

const Circle = styled.div`
  margin-right: 1.25rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 4.688rem;
  background-color: ${props => props.color};
`;
