import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

const OperationStatus = ({
  usedLicenseCnt,
  connectedClientCnt,
  expiredLicenseCnt,
}) => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  return (
    <Container>
      {!(expiredLicenseCnt || connectedClientCnt || usedLicenseCnt) ? (
        <P>데이터가 없습니다.</P>
      ) : (
        <FlexBox>
          <div>
            <Count>{expiredLicenseCnt}</Count>
            <Line />
            <Span>접속</Span>
          </div>
          <MarginRight isTablet={isTablet} />
          <div>
            <Count>{connectedClientCnt}</Count>
            <Line />
            <Span>만료</Span>
          </div>
          <MarginRight isTablet={isTablet} />
          <div>
            <Count>{usedLicenseCnt}</Count>
            <Line />
            <Span>등록</Span>
          </div>
        </FlexBox>
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

const Line = styled.div`
  width: 3rem;
  margin: 0.5rem 0 0.25rem;
`;

const P = styled.p`
  width: 100%;
  color: #9e9b9b;
  text-align: center;
`;

const Span = styled.span``;

const Count = styled.em`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MarginRight = styled.div`
  margin-right: 1.5rem;

  ${props =>
    props.isTablet &&
    css`
      margin-right: 0.5rem;
    `}
`;
