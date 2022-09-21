import React from "react";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
// import styled from "styled-components";

const ServerCapacity = () => {
  const CAPACITYDATA = {
    allCapacityData: 450,
    capacityData: 45,
  };

  return (
    <BoxContainer>
      <Title title="서버 용량" />
      <div>
        <span>Total : </span>
        <span>{CAPACITYDATA.capacityData}GB / </span>
        <span>{CAPACITYDATA.allCapacityData}GB</span>
        <span>
          {(CAPACITYDATA.capacityData / CAPACITYDATA.allCapacityData) * 100}%
        </span>
      </div>
    </BoxContainer>
  );
};

export default ServerCapacity;
