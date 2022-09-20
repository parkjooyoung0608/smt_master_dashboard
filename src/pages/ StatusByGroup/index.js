import React from "react";
import Title from "../../component/Title";
import styled from "styled-components";

const StatusByGroup = ({ getHeight }) => {
  return (
    <Container getHeight={getHeight}>
      <Title title="그룹별 현황" />
      StatusByGroup
    </Container>
  );
};

export default StatusByGroup;

const Container = styled.section`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex: 1;
  height: ${props => props.getHeight}px;
`;
