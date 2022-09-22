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
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: calc(50% - 6px);
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.div`
  font-size: 10px;
  color: grey;
`;

const ChartSkills = styled.ul`
  position: relative;
  width: 180px;
  height: 90px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: inherit;
    height: inherit;
    border: 45px solid rgba(211, 211, 211, 0.3);
    border-bottom: none;
    border-top-left-radius: 175px;
    border-top-right-radius: 175px;
  }
`;

const ChartSkillsContent = styled.li`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: inherit;
  border: 45px solid;
  border-top: none;
  border-bottom-left-radius: 175px;
  border-bottom-right-radius: 175px;
  transform-origin: 50% 0;
  transform: ${props => props.percent};
  border-color: #717ea4;
`;

const Percent = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  text-align: center;
`;
