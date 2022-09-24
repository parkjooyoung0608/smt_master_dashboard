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
        <Circle color="#9B210F">{accessBlockCnt}</Circle>
        <span>접근 종료</span>
      </FlexColumnCneter>
      <FlexColumnCneter>
        <Circle color="#C41822">{accessExitCnt}</Circle>
        <span>접근 차단</span>
      </FlexColumnCneter>
      <FlexColumnCneter>
        <Circle color="#F52330">{accessTimeoutCnt}</Circle>
        <span>접근 타임 아웃</span>
      </FlexColumnCneter>
      <FlexColumnCneter marginNone={true}>
        <Circle color="#F66C63">{dllInjectionCnt}</Circle>
        <span>DLL 인젝션</span>
      </FlexColumnCneter>
    </FlexBox>
  );
};

export default ProtectionStatusGroup;

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

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.25rem;
`;

const Circle = styled.div`
  width: 5rem;
  height: 3.75rem;
  line-height: 3.75rem;
  margin-bottom: 0.625rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 0.313rem;
  background-color: ${props => props.color};
`;
