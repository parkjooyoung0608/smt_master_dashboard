import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

const OperationStatus = ({
  usedLicenseCnt,
  connectedClientCnt,
  expiredLicenseCnt,
}) => {
  const isPc = useMediaQuery({
    query: "(min-width:1240px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  return (
    <Container>
      {isPc && (
        <FlexBox>
          <BarChartContainer>
            {!(expiredLicenseCnt || connectedClientCnt || usedLicenseCnt) ? (
              <P>데이터가 없습니다.</P>
            ) : (
              <>
                <ExpirationCount percent={expiredLicenseCnt}>
                  {expiredLicenseCnt}
                </ExpirationCount>
                <ConnectCount percent={connectedClientCnt}>
                  {connectedClientCnt}
                </ConnectCount>
                <RegistrationCount percent={usedLicenseCnt}>
                  {usedLicenseCnt}
                </RegistrationCount>
              </>
            )}
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
      )}

      {isTablet && (
        <>
          <BarChartContainer isTablet={isTablet}>
            {!(expiredLicenseCnt || connectedClientCnt || usedLicenseCnt) ? (
              <P>데이터가 없습니다.</P>
            ) : (
              <>
                <ExpirationCount percent={expiredLicenseCnt}>
                  {expiredLicenseCnt}
                </ExpirationCount>
                <ConnectCount percent={connectedClientCnt}>
                  {connectedClientCnt}
                </ConnectCount>
                <RegistrationCount percent={usedLicenseCnt}>
                  {usedLicenseCnt}
                </RegistrationCount>
              </>
            )}
          </BarChartContainer>
          <FlexBox isTablet={isTablet}>
            <FlexBox marginRight={true}>
              <Circle color="#1c7fff" isTablet={isTablet} />
              <Span>접속</Span>
            </FlexBox>
            <MarginBottom />
            <FlexBox marginRight={true}>
              <Circle color="#f85353" isTablet={isTablet} />
              <Span>만료</Span>
            </FlexBox>
            <MarginBottom />
            <FlexBox>
              <Circle color="#e1e1e1" isTablet={isTablet} />
              <Span>등록</Span>
            </FlexBox>
          </FlexBox>
        </>
      )}
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
  padding: 0.625rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.25rem;

  ${props =>
    props.isTablet &&
    css`
      justify-content: flex-start;
    `}

  ${props =>
    props.marginRight &&
    css`
      margin-right: 0.625rem;
    `}
`;

const BarChartContainer = styled.div`
  display: flex;
  align-content: center;
  width: 70%;
  height: 3.75rem;
  margin-right: 1.875rem;
  line-height: 3.75rem;

  ${props =>
    props.isTablet &&
    css`
      width: 100%;
      margin-right: 0;
      margin-bottom: 0.625rem;
    `}
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
  margin-right: 1.25rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 4.688rem;
  background-color: ${props => props.color};

  ${props =>
    props.isTablet &&
    css`
      margin-right: 0.313rem;
    `}
`;

const P = styled.p`
  width: 100%;
  color: #9e9b9b;
  font-weight: bold;
  text-align: center;
`;

const Span = styled.span`
  font-weight: bold;

  ${props =>
    props.isTablet &&
    css`
      margin-right: 10px;
    `}
`;

const MarginBottom = styled.div`
  margin-bottom: 0.313rem;
`;
