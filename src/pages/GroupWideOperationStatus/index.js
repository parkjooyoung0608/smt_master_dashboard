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
        <Card bgColor="#4B69D2">
          <Span>4</Span>
          <P>접속</P>
        </Card>
        <MarginRight />
        <Card bgColor="#D24B54">
          <Span>1</Span>
          <P>만료</P>
        </Card>
      </FlexBox>
    </Container>
  );
};

export default GroupWideOperationStatus;

const Container = styled.section`
  flex: 1;
  height: 50%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.15);
  border-radius: 0.313rem;
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
  padding: 0.3rem;
  text-align: center;
  color: #fff;
  border-radius: 0.313rem;
  background-color: ${props => props.bgColor};
`;

const P = styled.p`
  font-size: 0.75rem;
`;

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MarginBottom = styled.div`
  margin-bottom: 0.5rem;
`;
const MarginRight = styled.div`
  margin-right: 0.625rem;
`;
