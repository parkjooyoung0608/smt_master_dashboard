import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

const PolicyChangeStatus = ({
  policyDataLogCnt,
  serverStatusLogCnt,
  policyOperationEnvLogCnt,
  accountLogCnt,
}) => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  return (
    <Container>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#484F7C" isTablet={isTablet} />
          <span>데이터 정책</span>
        </DisplayFlex>
        <span>{policyDataLogCnt}</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#4A588D" isTablet={isTablet} />
          <span>시스템</span>
        </DisplayFlex>
        <span>{serverStatusLogCnt}</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#5C6BB0" isTablet={isTablet} />
          <span>운영환경</span>
        </DisplayFlex>
        <span>{policyOperationEnvLogCnt}</span>
      </FlexBox>
      <FlexBox>
        <DisplayFlex>
          <Circle color="#A4A1B6" isTablet={isTablet} />
          <span>계정</span>
        </DisplayFlex>
        <span>{accountLogCnt}</span>
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

  ${props =>
    props.isTablet &&
    css`
      margin-right: 0.8rem;
    `}
`;
