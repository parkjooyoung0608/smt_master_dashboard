import React from "react";
import AllDataProtectionStatus from "./pages/AllDataProtectionStatus";
import GroupWideOperationStatus from "./pages/GroupWideOperationStatus";
import OverallGroupStatus from "./pages/OverallGroupStatus";
import RealTimeDataProtectionStatus from "./pages/RealTimeDataProtectionStatus";
import ServerCapacity from "./pages/ServerCapacity";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AllDataProtectionStatus />
      <ServerCapacity />
      <GroupWideOperationStatus />
      <OverallGroupStatus />
      <RealTimeDataProtectionStatus />
    </>
  );
}

export default App;
