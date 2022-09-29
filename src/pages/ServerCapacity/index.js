import React from "react";
import { useMediaQuery } from "react-responsive";
import Title from "../../component/Title";
import styled, { css } from "styled-components";

const ServerCapacity = () => {
  const CAPACITYDATA = {
    allCapacityData: 450,
    capacityData: 49,
  };

  const CapacityPersent = Math.ceil(
    (CAPACITYDATA.capacityData / CAPACITYDATA.allCapacityData) * 100
  );

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  return (
    <Container isTablet={isTablet}>
      <div>
        <Title title="서버 용량" />
        <SubTitle>
          <span>Total : </span>
          <span>{CAPACITYDATA.capacityData}GB / </span>
          <span>{CAPACITYDATA.allCapacityData}GB</span>
        </SubTitle>
      </div>
      <ChartSkills isTablet={isTablet}>
        <ChartSkillsContent
          percent={"rotateZ(" + 180 / CapacityPersent + "deg)"}
        />
        <Percent>{CapacityPersent}%</Percent>
      </ChartSkills>
    </Container>
  );
};

export default ServerCapacity;

const Container = styled.div`
  position: relative;
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-radius: 0.313rem;
  height: calc(50% - 0.625rem);

  ${props =>
    props.isTablet &&
    css`
      height: 10rem;
    `}
`;

const SubTitle = styled.div`
  font-size: 0.65rem;
  color: grey;
`;

const ChartSkills = styled.ul`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 12rem;
  height: 6rem;
  margin: 1rem auto;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: inherit;
    height: inherit;
    border: 2.7rem solid rgba(211, 211, 211, 0.3);
    border-bottom: none;
    border-top-left-radius: 11rem;
    border-top-right-radius: 11rem;
  }

  ${props =>
    props.isTablet &&
    css`
      position: absolute;
      top: 50%;
      left: 18%;
      transform: translate(-50%, -50%);
    `}
`;

const ChartSkillsContent = styled.li`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: inherit;
  border: 2.688rem solid;
  border-top: none;
  border-bottom-left-radius: 10.938rem;
  border-bottom-right-radius: 10.938rem;
  transform-origin: 50% 0;
  transform: ${props => props.percent};
  border-color: #4b69d2;
`;

const Percent = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.25rem;
  text-align: center;
`;
