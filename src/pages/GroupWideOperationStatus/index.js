import React from "react";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
import styled from "styled-components";

const GroupWideOperationStatus = () => {
  return (
    <MarginBottom>
      <BoxContainer>
        <Title title="그룹 전체 운용 현황" />
        <p>등록 : 61</p>
        <div>
          <div>
            <h3>접속</h3>
            <span>4</span>
          </div>
          <div>
            <h3>만료</h3>
            <span>1</span>
          </div>
        </div>
      </BoxContainer>
    </MarginBottom>
  );
};

export default GroupWideOperationStatus;

const MarginBottom = styled.div`
  margin-bottom: 10px;
`;
