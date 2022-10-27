import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
import styled, { css } from "styled-components";

const AllDataProtectionStatus = () => {
  const [blockedData, setBlockedData] = useState();

  useEffect(() => {
    fetch("https://192.168.0.75/ds_api/dashboard/statis/count/week/memo", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlockedData(data.data);
      });
  }, [setBlockedData]);

  const todayProcessData =
    blockedData && blockedData[0].processBlockAllCnt.toLocaleString("en-US");
  const weekProcessData =
    blockedData && blockedData[1].processBlockAllCnt.toLocaleString("en-US");
  const monthProcessData =
    blockedData && blockedData[2].processBlockAllCnt.toLocaleString("en-US");

  const isPc = useMediaQuery({
    query: "(min-width:1240px)",
  });

  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1560px)",
  // });

  return (
    <>
      {isPc ? (
        <BoxContainer title="그룹 전체 데이터 보호 현황">
          <Title title="그룹 전체 데이터 보호 현황" />
          <FlexContainer>
            <Card line="none">
              <CardTextBox>
                <CountNum>{todayProcessData}</CountNum>
                <Date>일</Date>
              </CardTextBox>
            </Card>
            <Card>
              <CardTextBox>
                <CountNum>{weekProcessData}</CountNum>
                <Date>주</Date>
              </CardTextBox>
            </Card>
            <Card>
              <CardTextBox>
                <CountNum>{monthProcessData}</CountNum>
                <Date>월</Date>
              </CardTextBox>
            </Card>
          </FlexContainer>
        </BoxContainer>
      ) : (
        <BoxContainer>
          <Title title="그룹 전체 데이터 보호 현황" />
          <FlexContainer>
            <TabletCard>
              <CardTextBox>
                <CountNum>{todayProcessData}</CountNum>
                <Date>일</Date>
              </CardTextBox>
            </TabletCard>
            <TabletCard>
              <CardTextBox>
                <CountNum>{weekProcessData}</CountNum>
                <Date>주</Date>
              </CardTextBox>
            </TabletCard>
            <TabletCard>
              <CardTextBox>
                <CountNum>{monthProcessData}</CountNum>
                <Date>월</Date>
              </CardTextBox>
            </TabletCard>
          </FlexContainer>
        </BoxContainer>
      )}
    </>
  );
};

export default AllDataProtectionStatus;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 1.875rem);
  margin-right: 1rem;
  margin-left: -1rem;
`;

const Card = styled.div`
  display: flex;
  position: relative;
  width: 33%;
  height: 60%;
  text-align: center;
  color: #676a72;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-right: -200px;
    height: 50px;
    border-right: 3px solid #676a72;
    vertical-align: middle;

    ${props =>
      props.line &&
      css`
        border: none;
      `}
  }
`;

const CardTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CountNum = styled.p`
  font-size: 2.6rem;
  font-weight: bold;

  ${props =>
    props.isTablet &&
    css`
      font-size: 2rem;
    `}
`;

const Date = styled.p`
  font-size: 1.3rem;
`;

const TabletCard = styled.div`
  position: relative;
  width: 33%;
  height: 100px;
  text-align: center;
  color: #676a72;
  cursor: pointer;
  ${props =>
    props.select &&
    css`
      color: #ffffff;
      background-color: #7e94d4;
    `}
`;
