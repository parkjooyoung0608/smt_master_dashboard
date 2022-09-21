import React from "react";
import styled from "styled-components";

const PolicyChangeStatus = () => {
  return (
    <div>
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
    </div>
  );
};

export default PolicyChangeStatus;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 20px;
`;

const DisplayFlex = styled.div`
  display: flex;
`;

const Circle = styled.div`
  margin-right: 20px;
  width: 14px;
  height: 14px;
  border-radius: 75px;
  background-color: ${props => props.color};
`;
