import React from "react";
import styled from "styled-components";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";

const AllDataProtectionStatus = () => {
  return (
    <BoxContainer>
      <Title title="그룹 전체 데이터 보호 현황" />
      <FlexContainer>
        <div>
          <span>10</span>
          <span>일</span>
        </div>
        <div>
          <span>10</span>
          <span>주</span>
        </div>
        <div>
          <span>10</span>
          <span>월</span>
        </div>
      </FlexContainer>
    </BoxContainer>
  );
};

export default AllDataProtectionStatus;

const FlexContainer = styled.div`
  display: flex;
`;
