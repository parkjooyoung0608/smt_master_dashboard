import React from "react";
import styled from "styled-components";

const SecurityUpdate = ({ noVerifiedSecUpdateCnt }) => {
  return (
    <Container>
      <FlexBox>
        <PcCount>{noVerifiedSecUpdateCnt}</PcCount>
        <P>업데이트 필요 PC</P>
      </FlexBox>
    </Container>
  );
};

export default SecurityUpdate;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 10%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  line-height: 1.25rem;
`;

const PcCount = styled.p`
  margin-bottom: 0.625rem;
  font-size: 1.563rem;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 0.875rem;
`;
