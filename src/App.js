import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const getHeight = elementHeight && windowHeightSize - elementHeight - 70;

  const targetRef = useRef(null);
  const { getElementProperty } = useGetElementProperty(targetRef);

  useEffect(() => {
    const getElementHeight = getElementProperty("height");
    setElementHeight(getElementHeight);
  }, []);

  return (
    <>
      <GlobalStyle />
      <DashBoardContainer>
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

const MarginRight = styled.div`
  margin-right: 0.625rem;
`;
