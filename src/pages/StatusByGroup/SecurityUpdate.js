import React from "react";
import styled from "styled-components";

const SecurityUpdate = () => {
  return (
    <FlexBox>
      icon
      <span>업데이트 필요</span>
      <span>14</span>
    </FlexBox>
  );
};

export default SecurityUpdate;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 20px;
`;
