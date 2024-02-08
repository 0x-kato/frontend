import React from "react";
import Banner from "../components/Banner";
import TipSheet from "../components/TipSheet";

function SendTipPage() {
  return (
    <div style={{ backgroundColor: '#9994a7', minHeight: '100vh' }}>
      <div>
        <Banner />
        <TipSheet />
      </div>
    </div>
  );
}

export default SendTipPage;
