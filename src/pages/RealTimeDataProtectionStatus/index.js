import React from "react";
import styled from "styled-components";
import BoxContainer from "../../component/BoxContainer";
import Title from "../../component/Title";

const RealTimeDataProtectionStatus = () => {
  // 데이터 보호 목 데이터
  const PROTECTIONDATA = [
    {
      id: 1,
      group: "박주영",
      occurrenceTime: "2022-09-29 09:48:04",
      registrationTime: "2022-09-29 09:50:04",
      clientIp: "192.168.0.20",
      connectIp: "192.168.0.20",
    },
    {
      id: 2,
      group: "박주영",
      occurrenceTime: "2022-09-29 09:48:04",
      registrationTime: "2022-09-29 09:50:04",
      clientIp: "192.168.0.20",
      connectIp: "192.168.0.20",
    },
    {
      id: 3,
      group: "박주영",
      occurrenceTime: "2022-09-29 09:48:04",
      registrationTime: "2022-09-29 09:50:04",
      clientIp: "192.168.0.20",
      connectIp: "192.168.0.20",
    },
  ];

  return (
    <BoxContainer>
      <Title title="실시간 데이터 보호 현황" />
      <MarginBottom />
      <Table>
        <Thead>
          <Tr>
            <Th align="center">그룹</Th>
            <Th align="center">발생 시간</Th>
            <Th align="center">등록 시간</Th>
            <Th align="center">클라이언트 IP</Th>
            <Th align="center">접속 IP</Th>
          </Tr>
        </Thead>
        {PROTECTIONDATA.map(
          ({
            id,
            group,
            occurrenceTime,
            registrationTime,
            clientIp,
            connectIp,
          }) => (
            <tbody key={id}>
              <Tr>
                <Td>{group}</Td>
                <Td>{occurrenceTime}</Td>
                <Td>{registrationTime}</Td>
                <Td>{clientIp}</Td>
                <Td>{connectIp}</Td>
              </Tr>
            </tbody>
          )
        )}
      </Table>
    </BoxContainer>
  );
};

export default RealTimeDataProtectionStatus;

const Table = styled.table`
  width: 100%;
  font-size: 0.9em;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
  border-radius: 0.313rem;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #8195cf;
  color: #fff;
`;

const Tr = styled.tr`
  padding: 0.625rem 0;
  border-bottom: 0.063rem solid rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 0.625rem 0;
`;

const Td = styled.td`
  padding: 0.625rem 0;
  text-align: center;
`;

const MarginBottom = styled.div`
  margin-bottom: 0.625rem;
`;
