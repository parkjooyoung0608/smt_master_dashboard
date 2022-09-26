import React from "react";
import Title from "../../component/Title";
import styled, { css } from "styled-components";
import GroupStatus from "./GroupStatus";

const StatusByGroup = ({ getHeight, isPc }) => {
  return (
    <Container getHeight={getHeight}>
      <Header>
        <Title title="그룹별 현황" />
        <div>
          <SelectDateBtn select="#7E94D4">일</SelectDateBtn>
          <MarginRight />
          <SelectDateBtn>주</SelectDateBtn>
          <MarginRight />
          <SelectDateBtn>월</SelectDateBtn>
        </div>
      </Header>
      <MarginTop />
      <GroupStatus isPc={isPc} />
    </Container>
  );
};

export default StatusByGroup;

const Container = styled.section`
  flex: 1;
  height: ${props => props.getHeight}px;
  padding: 0.625rem;
  border-radius: 0.313rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectDateBtn = styled.button`
  width: 3.563rem;
  height: 2.813rem;
  color: #676a72;
  background-color: #1e2b45;
  border: none;
  border-radius: 0.313rem;
  ${props =>
    props.select &&
    css`
      color: #ffffff;
      background-color: #7e94d4;
    `}
`;

const MarginRight = styled.span`
  margin-right: 0.625rem;
`;

const MarginTop = styled.div`
  margin-top: 0.625rem;
`;
