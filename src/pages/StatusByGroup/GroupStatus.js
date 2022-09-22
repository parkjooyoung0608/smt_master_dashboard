import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpiryPeriod from "./ExpiryPeriod";
import OperationStatus from "./OperationStatus";
import PolicyChangeStatus from "./PolicyChangeStatus";
import ProtectionStatusGroup from "./ProtectionStatusGroup";
import SecurityUpdate from "./SecurityUpdate";
import Pagination from "./Pagination";

const GroupStatus = () => {
  const [allGroupData, setAllGroupData] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("data/allGroup.json", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setAllGroupData(data.data.searchedList);
      });
  }, []);

  return (
    <Container>
      <Table>
        <colgroup>
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 25 + "%" }} />
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 30 + "%" }} />
          <col style={{ width: 5 + "%" }} />
        </colgroup>
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
        {allGroupData &&
          allGroupData.slice(offset, offset + limit).map(props => (
            <tbody key={props.groupIdx}>
              <Tr>
                <Td>
                  <GroupName>{props.groupName}</GroupName>
                </Td>
                <Td>
                  <ExpiryPeriod operateEndDate={props.operateEndDate} />
                </Td>
                <Td>
                  <OperationStatus
                    usedLicenseCnt={props.usedLicenseCnt}
                    connectedClientCnt={props.connectedClientCnt}
                    expiredLicenseCnt={props.expiredLicenseCnt}
                  />
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
          ))}
      </Table>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>

      <Pagination
        total={allGroupData.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

export default GroupStatus;

const Container = styled.div``;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  font-size: 0.9em;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
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
  position: relative;
  padding: 10px;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const GroupName = styled.td`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
`;

const SituationIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 10%;
`;
