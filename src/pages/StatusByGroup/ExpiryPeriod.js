import React from "react";
import { useMediaQuery } from "react-responsive";
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

  const isPc = useMediaQuery({
    query: "(min-width:1240px)",
  });

  return (
    <Container>
      {diffDate > 0 ? (
        <Title isPc={isPc}>{getDateDiff()}일 지남</Title>
      ) : (
        <Title color={true} isPc={isPc}>
          {getDateDiff()}일 남음
        </Title>
      )}

      <Period isPc={isPc}>~{operateEndDate}</Period>
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
  font-size: 1.25rem;
  font-weight: bold;
  color: red;

  ${props =>
    props.color &&
    css`
      color: rgb(25, 25, 25);
    `}

  ${props =>
    !props.isPc &&
    css`
      font-size: 14px;
    `}
`;

const Period = styled.p`
  color: grey;

  ${props =>
    !props.isPc &&
    css`
      font-size: 10px;
    `}
`;
