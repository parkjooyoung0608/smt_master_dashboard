import React from "react";
import styled from "styled-components";

const OperationStatus = ({
  usedLicenseCnt,
  connectedClientCnt,
  expiredLicenseCnt,
}) => {
  return (
    <Container>
      <FlexBox>
        <BarChartContainer>
          <ExpirationCount percent={expiredLicenseCnt}>
            {expiredLicenseCnt}
          </ExpirationCount>
          <ConnectCount percent={connectedClientCnt}>
            {connectedClientCnt}
          </ConnectCount>
          <RegistrationCount percent={usedLicenseCnt}>
            {usedLicenseCnt}
          </RegistrationCount>
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
    </Container>
  );
};

export default OperationStatus;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;
`;

const BarChartContainer = styled.div`
  display: flex;
  align-content: center;
  width: 70%;
  height: 60px;
  margin-right: 30px;
  line-height: 60px;
  border: 1px solid #000;
`;

const ExpirationCount = styled.div`
  width: ${props => props.percent}%;
  height: 100%;
  color: #fff;
  background-color: #f85353;
`;
const ConnectCount = styled.div`
  width: ${props => props.percent}%;
  height: 100%;
  color: #fff;
  background-color: #1c7fff;
`;
const RegistrationCount = styled.div`
  width: ${props => props.percent}%;
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
