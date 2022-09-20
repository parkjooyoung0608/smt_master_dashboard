import React from "react";
import AllDataProtectionStatus from "./pages/AllDataProtectionStatus";
import GroupWideOperationStatus from "./pages/GroupWideOperationStatus";
import OverallGroupStatus from "./pages/OverallGroupStatus";
import RealTimeDataProtectionStatus from "./pages/RealTimeDataProtectionStatus";

function App() {
  return (
    <>
      <AllDataProtectionStatus />
      <GroupWideOperationStatus />
      <OverallGroupStatus />
      <RealTimeDataProtectionStatus />
    </>
  );
}

export default App;
