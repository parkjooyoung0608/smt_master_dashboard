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
  width: 90px;
  margin-right: 20px;
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
  line-height: 20px;
`;

const Circle = styled.div`
  width: 80px;
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  background-color: ${props => props.color};
`;
