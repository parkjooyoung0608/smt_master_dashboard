import React from "react";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
import styled, { css } from "styled-components";

const AllDataProtectionStatus = () => {
  return (
    <BoxContainer>
      <Title title="그룹 전체 데이터 보호 현황" />
      <FlexContainer>
        <Card select="#8195CF">
          <CardTextBox>
            <CountNum>10</CountNum>
            <Date>일</Date>
          </CardTextBox>
        </Card>
        <MarginRight />
        <Card>
          <CardTextBox>
            <CountNum>4,881</CountNum>
            <Date>주</Date>
          </CardTextBox>
        </Card>
        <MarginRight />
        <Card>
          <CardTextBox>
            <CountNum>13,408</CountNum>
            <Date>월</Date>
          </CardTextBox>
        </Card>
      </FlexContainer>
    </BoxContainer>
  );
};

export default AllDataProtectionStatus;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30px);
`;

const Card = styled.div`
  position: relative;
  width: 33%;
  height: 70%;
  text-align: center;
  color: #676a72;
  background-color: #212d4f;
  border-radius: 5px;
  ${props =>
    props.select &&
    css`
      color: #ffffff;
      background-color: #7e94d4;
    `}
`;

const CardTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CountNum = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 16px;
`;

const MarginRight = styled.div`
  margin-right: 10px;
`;
