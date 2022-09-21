import React from "react";
import styled from "styled-components";

const OperationStatus = () => {
  const 등록개수 = 22;
  const 접속개수 = 10;
  const 만료개수 = 2;

  return (
    <FlexBox>
      <BarChartContainer>
        <ExpirationCount>{만료개수}</ExpirationCount>
        <ConnectCount>{접속개수}</ConnectCount>
        <RegistrationCount>{등록개수}</RegistrationCount>
      </BarChartContainer>
      <div>
        <FlexBox>
          <Circle color="#1c7fff" />
          <Span>접속</Span>
        </FlexBox>
        <MarginBottom />
        <FlexBox>
          <Circle color="#f85353" />
          <Span>만료</Span>
        </FlexBox>
        <MarginBottom />
        <FlexBox>
          <Circle color="#e1e1e1" />
          <Span>등록</Span>
        </FlexBox>
      </div>
    </FlexBox>
  );
};

export default OperationStatus;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
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

const ExpirationCount = styled.div`
  width: 20px;
  height: 100%;
  color: #fff;
  background-color: #f85353;
`;
const ConnectCount = styled.div`
  width: 20px;
  height: 100%;
  color: #fff;
  background-color: #1c7fff;
`;
const RegistrationCount = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #e1e1e1;
`;

const Circle = styled.div`
  margin-right: 20px;
  width: 14px;
  height: 14px;
  border-radius: 75px;
  background-color: ${props => props.color};
`;

const Span = styled.span`
  font-weight: bold;
`;

const MarginBottom = styled.div`
  margin-bottom: 5px;
`;
