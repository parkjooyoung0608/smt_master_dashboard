import React from "react";
import styled, { css } from "styled-components";

const ExpiryPeriod = ({ operateEndDate }) => {
  const nowDate = new Date();
  const endDate = new Date(operateEndDate);
  const diffDate = nowDate.getTime() - endDate.getTime();
  const getDateDiff = () => {
    if (diffDate > 0) {
      return Math.floor(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    } else {
      const diffDate2 = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      return Math.abs(diffDate2);
    }
  };

  console.log(getDateDiff());

  return (
    <Container>
      {diffDate > 0 ? (
        <Title>{getDateDiff()}일 지남</Title>
      ) : (
        <Title color={true}>{getDateDiff()}일 남음</Title>
      )}

      <Period>~{operateEndDate}</Period>
    </Container>
  );
};

export default ExpiryPeriod;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: red;

  ${props =>
    props.color &&
    css`
      color: #000;
    `}
`;

const Period = styled.p`
  color: grey;
`;
