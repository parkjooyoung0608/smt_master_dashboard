import React from "react";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
import styled from "styled-components";

const GroupWideOperationStatus = () => {
  return (
    <MarginBottom>
      <BoxContainer>
        <Title title="전체 그룹 현황" />
        GroupWideOperationStatus
      </BoxContainer>
    </MarginBottom>
  );
};

export default GroupWideOperationStatus;

const MarginBottom = styled.div`
  margin-bottom: 10px;
`;
