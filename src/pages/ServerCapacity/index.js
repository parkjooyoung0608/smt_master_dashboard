import React from "react";
import Title from "../../component/Title";
import styled from "styled-components";

const ServerCapacity = () => {
  const CAPACITYDATA = {
    allCapacityData: 450,
    capacityData: 49,
  };

  const CapacityPersent = Math.ceil(
    (CAPACITYDATA.capacityData / CAPACITYDATA.allCapacityData) * 100
  );
  return (
    <Container>
      <FlexBox>
        <Title title="서버 용량" />
        <SubTitle>
          <span>Total : </span>
          <span>{CAPACITYDATA.capacityData}GB / </span>
          <span>{CAPACITYDATA.allCapacityData}GB</span>
        </SubTitle>
      </FlexBox>

      <ChartSkills>
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
  flex: 1;
  padding: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-radius: 0.313rem;
  height: calc(50% - 0.625rem);
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.div`
  font-size: 0.625rem;
  color: grey;
`;

const ChartSkills = styled.ul`
  position: relative;
  width: 11.25rem;
  height: 5.625rem;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: inherit;
    height: inherit;
    border: 2.688rem solid rgba(211, 211, 211, 0.3);
    border-bottom: none;
    border-top-left-radius: 10.938rem;
    border-top-right-radius: 10.938rem;
  }
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
  border-color: #717ea4;
`;

const Percent = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.25rem;
  text-align: center;
`;
