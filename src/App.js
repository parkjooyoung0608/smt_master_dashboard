import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useWindowSize from "./hooks/useWindowSize";
import AllDataProtectionStatus from "./pages/AllDataProtectionStatus";
import GroupWideOperationStatus from "./pages/GroupWideOperationStatus";
import StatusByGroup from "./pages/StatusByGroup";
import RealTimeDataProtectionStatus from "./pages/RealTimeDataProtectionStatus";
import ServerCapacity from "./pages/ServerCapacity";
import DashBoardContainer from "./component/DashBoardContainer";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

// TODO : 정리 필요
export const useGetElementProperty = elementRef => {
  const getElementProperty = useCallback(
    targetProperty => {
      const clientRect = elementRef.current?.getBoundingClientRect();
      if (clientRect) {
        return clientRect[targetProperty];
      }
      return 0;
    },
    [elementRef]
  );

  return {
    getElementProperty,
  };
};

function App() {
  const [elementHeight, setElementHeight] = useState(0);

  const size = useWindowSize();
  const windowHeightSize = size.height;
  const getHeight = elementHeight && windowHeightSize - elementHeight - 100;

  const targetRef = useRef(null);
  const { getElementProperty } = useGetElementProperty(targetRef);

  useEffect(() => {
    const getElementHeight = getElementProperty("height");
    setElementHeight(getElementHeight);
  }, []);

  const isPc = useMediaQuery({
    query: "(min-width:1240px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1240px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPc && (
        <>
          <GlobalStyle />
          <DashBoardContainer>
            <H1>대시보드</H1>
            <FlexContainer ref={targetRef}>
              <FirstSection>
                <GroupWideOperationStatus />
                <ServerCapacity />
              </FirstSection>
              <AllDataProtectionStatus />
              <MarginRight />
              <RealTimeDataProtectionStatus />
            </FlexContainer>
            <StatusByGroup getHeight={getHeight} />
          </DashBoardContainer>
        </>
      )}
      {isTablet && (
        <>
          <GlobalStyle />
          <DashBoardContainer isTablet={isTablet}>
            <H1>대시보드</H1>
            <GroupWideOperationStatus />
            <MarginButton />
            <ServerCapacity />
            <MarginButton />
            <AllDataProtectionStatus />
            <MarginButton />
            <RealTimeDataProtectionStatus />
            <MarginButton />
            <StatusByGroup />
          </DashBoardContainer>
        </>
      )}
      {isMobile && (
        <MobileContainer>
          화면 크기를 767px 이상으로 늘려주세요.
        </MobileContainer>
      )}
    </>
  );
}

export default App;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
  height: 37%;
`;

const FirstSection = styled.div`
  margin-right: 0.625rem;
  width: 20%;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const MarginRight = styled.div`
  margin-right: 0.625rem;
`;

const MarginButton = styled.div`
  margin-bottom: 0.625rem;
`;

const MobileContainer = styled.div`
  background-color: #212d4f;
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
