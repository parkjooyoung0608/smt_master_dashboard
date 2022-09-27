import React, { useState } from "react";
import Title from "../../component/Title";
import styled, { css } from "styled-components";
import GroupStatus from "./GroupStatus";

const StatusByGroup = ({ getHeight }) => {
  const [changeDate, setChangeDate] = useState("0");

  const onClickDate = e => {
    setChangeDate(e.target.value);
  };

  return (
    <Container getHeight={getHeight}>
      <Header>
        <Title title="그룹별 현황" />
        <div>
          <SelectDateBtn
            value="0"
            onClick={e => {
              onClickDate(e);
            }}
            select={changeDate === "0" && "#7E94D4"}
          >
            일
          </SelectDateBtn>
          <MarginRight />
          <SelectDateBtn
            value="1"
            onClick={e => {
              onClickDate(e);
            }}
            select={changeDate === "1" && "#7E94D4"}
          >
            주
          </SelectDateBtn>
          <MarginRight />
          <SelectDateBtn
            value="2"
            onClick={e => {
              onClickDate(e);
            }}
            select={changeDate === "2" && "#7E94D4"}
          >
            월
          </SelectDateBtn>
        </div>
      </Header>
      <MarginTop />
      <GroupStatus changeDate={changeDate} />
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
  width: 2rem;
  background-color: inherit;
  color: #676a72;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  ${props =>
    props.select &&
    css`
      padding: 0.4rem 0;
      color: rgb(25, 25, 25);
      border-bottom: 2px solid #7e94d4;
    `}
`;

const MarginRight = styled.span`
  margin-right: 0.625rem;
`;

const MarginTop = styled.div`
  margin-top: 0.625rem;
`;
