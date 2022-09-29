import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ExpiryPeriod from "./ExpiryPeriod";
import OperationStatus from "./OperationStatus";
import PolicyChangeStatus from "./PolicyChangeStatus";
import ProtectionStatusGroup from "./ProtectionStatusGroup";
import SecurityUpdate from "./SecurityUpdate";
import Pagination from "./Pagination";
import CustomizedSwitches from "../../component/OnOffBtn";
import styled, { css } from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const GroupStatus = ({ changeDate }) => {
  const [allGroupData, setAllGroupData] = useState("");
  const [totalGroup, setTotalGroup] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pageShow, setPageShow] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [arrowBtn, setArrowBtn] = useState(false);
  const [sortOperateToggle, setSortOperateToggle] = useState(false);
  const [sortUpdateToggle, setSortUpdateToggle] = useState(false);
  const [sortOperationStatusToggle, setSortOperationStatusToggle] =
    useState(false);
  const [sortProtectLogToggle, setSortProtectLogToggle] = useState(false);
  const [sortActiveToggle, setSortActiveToggle] = useState(false);

  const offset = (page - 1) * limit;

  useEffect(() => {
    if (changeDate === "0") {
      fetch("data/allGroup.json", { method: "GET" })
        .then(res => res.json())
        .then(data => {
          setAllGroupData(data.data.searchedList);
          setTotalGroup(data.data.total);
        });
    }
    if (changeDate === "1") {
      fetch("data/allGroupWeek.json", { method: "GET" })
        .then(res => res.json())
        .then(data => {
          setAllGroupData(data.data.searchedList);
          setTotalGroup(data.data.total);
        });
    }
    if (changeDate === "2") {
      fetch("data/allGroupMonth.json", { method: "GET" })
        .then(res => res.json())
        .then(data => {
          setAllGroupData(data.data.searchedList);
          setTotalGroup(data.data.total);
        });
    }
  }, [changeDate]);

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

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  const onSortGroupName = () => {
    allGroupData &&
      allGroupData.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
        else return -1;
      });
    setAllGroupData([...allGroupData]);
    setArrowBtn(!arrowBtn);
  };

  const onSortOperateDate = () => {
    setSortOperateToggle(!sortOperateToggle);
    if (sortOperateToggle === false) {
      allGroupData &&
        allGroupData.sort(
          (a, b) => new Date(a.operateEndDate) - new Date(b.operateEndDate)
        );
    } else {
      allGroupData &&
        allGroupData.sort(
          (a, b) => new Date(b.operateEndDate) - new Date(a.operateEndDate)
        );
    }
    setAllGroupData([...allGroupData]);
  };

  const onSortOperationStatus = () => {
    setSortOperationStatusToggle(!sortOperationStatusToggle);
    if (sortOperationStatusToggle === false) {
      allGroupData &&
        allGroupData.sort((a, b) => b.usedLicenseCnt - a.usedLicenseCnt);
    } else {
      allGroupData &&
        allGroupData.sort((a, b) => a.usedLicenseCnt - b.usedLicenseCnt);
    }
    setAllGroupData([...allGroupData]);
  };

  const [sortPolicyChange, setSortPolicyChange] = useState(false);
  const onSortPolicyChangeStatus = () => {
    setSortPolicyChange(!sortPolicyChange);
    if (sortPolicyChange === false) {
      allGroupData &&
        allGroupData.sort((a, b) => {
          const x =
            a.policyDataLogCnt +
            a.serverStatusLogCnt +
            a.policyOperationEnvLogCnt +
            a.accountLogCnt;
          const y =
            b.policyDataLogCnt +
            b.serverStatusLogCnt +
            b.policyOperationEnvLogCnt +
            b.accountLogCnt;
          if (x < y) return 1;
          if (x > y) return -1;
          return 0;
        });
    } else {
      allGroupData &&
        allGroupData.sort((a, b) => {
          const x =
            a.policyDataLogCnt +
            a.serverStatusLogCnt +
            a.policyOperationEnvLogCnt +
            a.accountLogCnt;
          const y =
            b.policyDataLogCnt +
            b.serverStatusLogCnt +
            b.policyOperationEnvLogCnt +
            b.accountLogCnt;
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        });
    }
    setAllGroupData([...allGroupData]);
  };

  const onSortUpdateCnt = () => {
    setSortUpdateToggle(!sortUpdateToggle);
    if (sortUpdateToggle === false) {
      allGroupData &&
        allGroupData.sort((a, b) => {
          return b.noVerifiedSecUpdateCnt - a.noVerifiedSecUpdateCnt;
        });
    } else {
      allGroupData &&
        allGroupData.sort((a, b) => {
          return a.noVerifiedSecUpdateCnt - b.noVerifiedSecUpdateCnt;
        });
    }
    setAllGroupData([...allGroupData]);
  };

  const onSortProtectLogCnt = () => {
    setSortProtectLogToggle(!sortProtectLogToggle);
    if (sortProtectLogToggle === false) {
      allGroupData &&
        allGroupData.sort((a, b) => {
          return (
            b.fileProtectLogCnt.accessBlockCnt -
            a.fileProtectLogCnt.accessBlockCnt
          );
        });
    } else {
      allGroupData &&
        allGroupData.sort((a, b) => {
          return (
            a.fileProtectLogCnt.accessBlockCnt -
            b.fileProtectLogCnt.accessBlockCnt
          );
        });
    }
    setAllGroupData([...allGroupData]);
  };

  const onSortActive = () => {
    setSortActiveToggle(!sortActiveToggle);
    if (sortActiveToggle === false) {
      allGroupData &&
        allGroupData.sort((a, b) => {
          const x = a.isActive.toLowerCase();
          const y = b.isActive.toLowerCase();
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        });
    } else {
      allGroupData &&
        allGroupData.sort((a, b) => {
          const x = a.isActive.toLowerCase();
          const y = b.isActive.toLowerCase();
          if (x < y) return 1;
          if (x > y) return -1;
          return 0;
        });
    }
    setAllGroupData([...allGroupData]);
  };

  return (
    <Container>
      <FlexBox>
        <p>
          총 <Em>{totalGroup}</Em>개 그룹
        </p>
        <Label>
          <SelectContainer>
            <SelectTitle toggle={toggle === true} onClick={onShowDropbox}>
              <SelectNum>{pageShow}</SelectNum>
              {toggle ? (
                <IoMdArrowDropup color="#a8a8a8" />
              ) : (
                <IoMdArrowDropdown color="#a8a8a8" />
              )}
            </SelectTitle>
            <Title>개씩 보기</Title>
            {toggle ? (
              <SelectNums>
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
            ) : null}
          </SelectContainer>
        </Label>
      </FlexBox>

      <Table>
        <colgroup>
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 15 + "%" }} />
          <col style={{ width: 15 + "%" }} />
          <col style={{ width: 10 + "%" }} />
          <col style={{ width: 30 + "%" }} />
          <col style={{ width: 5 + "%" }} />
        </colgroup>
        <Thead>
          <Tr>
            <Th>
              <Title>
                그룹
                {arrowBtn ? (
                  <MdKeyboardArrowUp
                    className="arrow"
                    onClick={onSortGroupName}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortGroupName}
                  />
                )}
              </Title>
            </Th>
            <Th>
              <Title>
                유효 기간
                {sortOperateToggle ? (
                  <MdKeyboardArrowUp
                    className="arrow"
                    onClick={onSortOperateDate}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortOperateDate}
                  />
                )}
              </Title>
            </Th>
            <Th>
              <Title>
                그룹별 운용 현황
                {sortOperationStatusToggle ? (
                  <MdKeyboardArrowUp
                    className="arrow"
                    onClick={onSortOperationStatus}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortOperationStatus}
                  />
                )}
              </Title>
            </Th>
            <Th>
              <Title>
                정책 변경 현황
                <MdKeyboardArrowDown
                  className="arrow"
                  onClick={onSortPolicyChangeStatus}
                />
              </Title>
            </Th>
            <Th>
              <Title>
                보안 업데이트
                {sortUpdateToggle ? (
                  <MdKeyboardArrowUp
                    className="arrow"
                    onClick={onSortUpdateCnt}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortUpdateCnt}
                  />
                )}
              </Title>
            </Th>
            <Th>
              <Title>
                그룹별 데이터 보호
                {sortProtectLogToggle ? (
                  <MdKeyboardArrowUp
                    className="arrow"
                    onClick={onSortProtectLogCnt}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortProtectLogCnt}
                  />
                )}
              </Title>
            </Th>
            <Th>
              <Title>
                상태
                {sortActiveToggle ? (
                  <MdKeyboardArrowUp className="arrow" onClick={onSortActive} />
                ) : (
                  <MdKeyboardArrowDown
                    className="arrow"
                    onClick={onSortActive}
                  />
                )}
              </Title>
            </Th>
          </Tr>
        </Thead>
        {allGroupData &&
          allGroupData.slice(offset, offset + limit).map(props => (
            <tbody key={props.groupIdx}>
              <Tr>
                <Td>
                  <GroupName isTablet={isTablet}>{props.groupName}</GroupName>
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
                  <PolicyChangeStatus
                    policyDataLogCnt={props.policyDataLogCnt}
                    serverStatusLogCnt={props.serverStatusLogCnt}
                    policyOperationEnvLogCnt={props.policyOperationEnvLogCnt}
                    accountLogCnt={props.accountLogCnt}
                  />
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
                    <CustomizedSwitches isActive={props.isActive} />
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
  margin-bottom: 0.625rem;
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  font-size: 0.9em;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
  overflow: hidden;
`;

const Thead = styled.thead`
  font-weight: bold;
  background-color: rgb(228, 226, 226);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const Tr = styled.tr`
  padding: 0.625rem;
  border-bottom: 0.063rem solid rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 0.625rem;
  padding-left: 1.5rem;

  .arrow {
    font-size: 1rem;
    vertical-align: top;
    margin-top: 1px;
    margin-left: 0.5rem;
  }
`;

const Title = styled.p`
  margin-left: 0.313rem;
`;

const Td = styled.td`
  position: relative;
  height: 6.25rem;
  padding: 0.625rem;
  text-align: center;
  border-right: 0.063rem solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const GroupName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-weight: bold;

  ${props =>
    props.isTablet &&
    css`
      font-size: 0.75rem;
    `}
`;

const SituationIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;
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
  width: 5rem;
  padding: 0.313rem 0.938rem;
  border: 0.063rem solid #a8a8a8;
  background-color: #ffffff;
  border-radius: 0.313rem;
  ${props =>
    props.toggle &&
    css`
      border-color: #7e94d4;
    `}
`;

const SelectNum = styled.div``;

const SelectNums = styled.ul`
  position: absolute;
  top: 2.188rem;
  left: -0.625rem;
  width: 5rem;
  margin-left: 0.625rem;
  border: 0.063rem solid #a8a8a8;
  border-radius: 0.313rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const Option = styled.li`
  padding: 0.188rem 0.625rem;
  &:hover {
    font-weight: bold;
    background-color: #ecedef;
  }
`;

const Em = styled.em`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212d4f;
`;
