import React from "react";
import styled from "styled-components";
import ExpiryPeriod from "./ExpiryPeriod";
import OperationStatus from "./OperationStatus";
import PolicyChangeStatus from "./PolicyChangeStatus";
import ProtectionStatusGroup from "./ProtectionStatusGroup";
import SecurityUpdate from "./SecurityUpdate";

const GroupStatus = () => {
  return (
    <Container>
      <Table>
        {/* 
        TODO : 테이블 비율 설정하기
        <colgroup>
          <col style="width:10%" />
          <col style="width:10%" />
          <col style="width:10%" />
          <col style="width:10%" />
          <col style="width:10%" />
          <col style="width:10%" />
          <col style="width:10%" />
        </colgroup> */}
        <Thead>
          <Tr>
            <Th>그룹</Th>
            <Th>유효 기간</Th>
            <Th>그룹별 운용 현황</Th>
            <Th>정책 변경 현황</Th>
            <Th>보안 업데이트</Th>
            <Th>그룹별 데이터 보호</Th>
            <Th>상태</Th>
          </Tr>
        </Thead>
        <tbody>
          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>

          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>

          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>

          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>

          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>

          <Tr>
            <GroupName>박주영</GroupName>
            <Td>
              <ExpiryPeriod />
            </Td>
            <Td>
              <OperationStatus />
            </Td>
            <Td>
              <PolicyChangeStatus />
            </Td>
            <Td>
              <SecurityUpdate />
            </Td>
            <Td>
              <ProtectionStatusGroup />
            </Td>
            <Td>
              <SituationIcon>icon</SituationIcon>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default GroupStatus;

const Container = styled.div`
  /* width: 100%;
  max-height: 100%; */
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  font-size: 0.9em;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
  border-radius: 5px;
`;

const Thead = styled.thead`
  background-color: #8195cf;
  color: #fff;
`;

const Tr = styled.tr`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const GroupName = styled.td`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
`;

const SituationIcon = styled.div`
  color: black;
`;
