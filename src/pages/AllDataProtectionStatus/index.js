import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";
import styled, { css } from "styled-components";

const AllDataProtectionStatus = () => {
  const [blockedData, setBlockedData] = useState();

  useEffect(() => {
    fetch(
      "http://192.168.0.75:8080/ds_api/dashboard/statis/total/block-proc/all-group",
      { method: "POST" }
    )
      .then(res => res.json())
      .then(data => {
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

  return (
    <>
      {isPc ? (
        <BoxContainer>
          <Title title="그룹 전체 데이터 보호 현황" />
          <FlexContainer>
            <Card select="#8195CF">
              <CardTextBox>
                <CountNum>{todayProcessData}</CountNum>
                <Date>일</Date>
              </CardTextBox>
            </Card>
            <MarginRight />
            <Card>
              <CardTextBox>
                <CountNum>{weekProcessData}</CountNum>
                <Date>주</Date>
              </CardTextBox>
            </Card>
            <MarginRight />
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
            <TabletCard select="#8195CF">
              <CardTextBox>
                <CountNum>{todayProcessData}</CountNum>
                <Date>일</Date>
              </CardTextBox>
            </TabletCard>
            <MarginRight />
            <TabletCard>
              <CardTextBox>
                <CountNum>{weekProcessData}</CountNum>
                <Date>주</Date>
              </CardTextBox>
            </TabletCard>
            <MarginRight />
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
`;

const Card = styled.div`
  position: relative;
  width: 33%;
  height: 70%;
  text-align: center;
  color: #676a72;
  background-color: #212d4f;
  border-radius: 0.313rem;
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
  font-size: 2.5rem;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 1rem;
`;

const MarginRight = styled.div`
  margin-right: 0.625rem;
`;

const TabletCard = styled.div`
  position: relative;
  width: 33%;
  height: 100px;
  text-align: center;
  color: #676a72;
  background-color: #212d4f;
  border-radius: 0.313rem;
  cursor: pointer;
  ${props =>
    props.select &&
    css`
      color: #ffffff;
      background-color: #7e94d4;
    `}
`;
