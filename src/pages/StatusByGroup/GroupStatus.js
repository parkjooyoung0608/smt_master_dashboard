import React, { useEffect, useState } from "react";
import ExpiryPeriod from "./ExpiryPeriod";
import OperationStatus from "./OperationStatus";
import PolicyChangeStatus from "./PolicyChangeStatus";
import ProtectionStatusGroup from "./ProtectionStatusGroup";
import SecurityUpdate from "./SecurityUpdate";
import Pagination from "./Pagination";
import styled, { css } from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import CustomizedSwitches from "../../component/onOffBtn";

const GroupStatus = () => {
  const [allGroupData, setAllGroupData] = useState("");
  const [totalGroup, setTotalGroup] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pageShow, setPageShow] = useState(10);
  const [toggle, setToggle] = useState(false);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("data/allGroup.json", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setAllGroupData(data.data.searchedList);
        setTotalGroup(data.data.total);
      });
  }, []);

  const option = e => {
    setPageShow(e.target.value);
    setToggle(!toggle);
  };

  useEffect(() => {
    setLimit(pageShow);
  }, [pageShow]);

  const onShowDropbox = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <FlexBox>
        <p>총 {totalGroup}개 그룹</p>
        <Label>
          <SelectContainer>
            <SelectTitle onToggle={toggle} onClick={onShowDropbox}>
              <SelectNum>{pageShow}</SelectNum>
              {toggle ? (
                <IoMdArrowDropup color="#a8a8a8" />
              ) : (
                <IoMdArrowDropdown color="#a8a8a8" />
              )}
            </SelectTitle>
            <Title>개씩 보기</Title>
            <SelectNums onToggle={toggle}>
              <Option onClick={option} value="10">
                10
              </Option>
              <Option onClick={option} value="20">
                20
              </Option>
              <Option onClick={option} value="50">
                50
              </Option>
              <Option onClick={option} value="100">
                100
              </Option>
            </SelectNums>
          </SelectContainer>
        </Label>
      </FlexBox>

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
                  <SecurityUpdate
                    noVerifiedSecUpdateCnt={props.noVerifiedSecUpdateCnt}
                  />
                </Td>
                <Td>
                  <ProtectionStatusGroup
                    accessBlockCnt={props.fileProtectLogCnt.accessBlockCnt}
                    accessExitCnt={props.fileProtectLogCnt.accessExitCnt}
                    accessTimeoutCnt={props.fileProtectLogCnt.accessTimeoutCnt}
                    dllInjectionCnt={props.fileProtectLogCnt.dllInjectionCnt}
                  />
                </Td>
                <Td>
                  <SituationIcon>
                    <CustomizedSwitches />
                  </SituationIcon>
                </Td>
              </Tr>
            </tbody>
          ))}
      </Table>
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

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

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
  height: 100px;
  padding: 10px;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const GroupName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
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

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.p`
  margin-left: 5px;
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  padding: 5px 15px;
  border: 1px solid #a8a8a8;
  background-color: #ffffff;
  border-radius: 5px;
  ${props =>
    props.onToggle &&
    css`
      border-color: #7e94d4;
    `}
`;

const SelectNum = styled.div``;

const SelectNums = styled.ul`
  display: none;
  position: absolute;
  top: 35px;
  left: -10px;
  width: 80px;
  margin-left: 10px;
  border: 1px solid #a8a8a8;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  z-index: 100;
  ${props =>
    props.onToggle &&
    css`
      display: block;
    `}
`;

const Option = styled.li`
  padding: 3px 10px;
  &:hover {
    font-weight: bold;
    background-color: #ecedef;
  }
`;
