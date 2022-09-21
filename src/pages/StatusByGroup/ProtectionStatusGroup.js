import React from "react";
import styled from "styled-components";

const ProtectionStatusGroup = () => {
  return (
    <DisplayFlex>
      <BarChartContainer>
        <div>5</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </BarChartContainer>
      <div>
        <FlexBox>
          <Circle color="#FF0000" />
          <span>접근 종료</span>
        </FlexBox>
        <FlexBox>
          <Circle color="#FFB300" />
          <span>접근 차단</span>
        </FlexBox>
        <FlexBox>
          <Circle color="#FF3C00" />
          <span>접근 타임 아웃</span>
        </FlexBox>
        <FlexBox>
          <Circle color="#FF3C00" />
          <span>DLL 인젝션</span>
        </FlexBox>
      </div>
    </DisplayFlex>
  );
};

export default ProtectionStatusGroup;

const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: start;
  text-align: center;
  line-height: 20px;
`;

const BarChartContainer = styled.div`
  display: flex;
  width: 300px;
  height: 60px;
  line-height: 60px;
  margin-right: 30px;
`;

const Circle = styled.div`
  margin-right: 20px;
  width: 14px;
  height: 14px;
  border-radius: 75px;
  background-color: ${props => props.color};
`;
