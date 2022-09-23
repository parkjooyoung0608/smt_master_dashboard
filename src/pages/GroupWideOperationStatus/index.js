import React from "react";
import Title from "../../component/Title";
import styled from "styled-components";

const GroupWideOperationStatus = () => {
  return (
    <Container>
      <Title title="그룹 전체 운용 현황" />
      <P>등록 : 61</P>

      <MarginBottom />
      <FlexBox>
        <Card bgColor="#5387F8">
          <h3>접속</h3>
          <Span>4</Span>
        </Card>
        <MarginRight />
        <Card bgColor="#DC6356">
          <h3>만료</h3>
          <Span>1</Span>
        </Card>
      </FlexBox>
    </Container>
  );
};

export default GroupWideOperationStatus;

const Container = styled.section`
  flex: 1;
  height: 50%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 0.625rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
`;

const P = styled.p`
  font-size: 12px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const MarginBottom = styled.div`
  margin-bottom: 0.625rem;
`;
const MarginRight = styled.div`
  margin-right: 10px;
`;
