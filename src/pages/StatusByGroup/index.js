import React from "react";
import Title from "../../component/Title";
import styled, { css } from "styled-components";
import GroupStatus from "./GroupStatus";

const StatusByGroup = ({ getHeight }) => {
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
      <GroupStatus />
      {/* TODO 페이지네이션 들어가야 함 */}
    </Container>
  );
};

export default StatusByGroup;

const Container = styled.section`
  flex: 1;
  height: ${props => props.getHeight}px;
  /* max-height: ${props => props.getHeight}px; */
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  /* overflow: hidden; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectDateBtn = styled.button`
  width: 57px;
  height: 45px;
  color: #676a72;
  background-color: #1e2b45;
  border: none;
  border-radius: 5px;
  ${props =>
    props.select &&
    css`
      color: #ffffff;
      background-color: #7e94d4;
    `}
`;

const MarginRight = styled.span`
  margin-right: 10px;
`;

const MarginTop = styled.div`
  margin-top: 10px;
`;
