import React from "react";
import styled, { css } from "styled-components";

const ProtectionStatusGroup = ({
  accessBlockCnt,
  accessExitCnt,
  accessTimeoutCnt,
  dllInjectionCnt,
}) => {
  return (
    <FlexBox>
      <FlexColumnCneter>
        <Circle color="#9C403E">{accessBlockCnt}</Circle>
        <span>접근 종료</span>
      </FlexColumnCneter>
      <FlexColumnCneter>
        <Circle color="#AF353C">{accessExitCnt}</Circle>
        <span>접근 차단</span>
      </FlexColumnCneter>
      <FlexColumnCneter>
        <Circle color="#D24B54">{accessTimeoutCnt}</Circle>
        <span>접근 타임 아웃</span>
      </FlexColumnCneter>
      <FlexColumnCneter marginNone={true}>
        <Circle color="#C59FA2">{dllInjectionCnt}</Circle>
        <span>DLL 인젝션</span>
      </FlexColumnCneter>
    </FlexBox>
  );
};

export default ProtectionStatusGroup;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const FlexColumnCneter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 5.625rem;
  margin-right: 1.25rem;
  align-items: center;

  ${props =>
    props.marginNone &&
    css`
      margin-right: 0;
    `}
`;
const Circle = styled.div`
  width: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color};
`;
