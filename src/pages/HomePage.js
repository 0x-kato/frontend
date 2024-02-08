import React from "react";
import Banner from "../components/Banner";
import LoginSheet from "../components/LoginSheet";

function HomePage() {
  return (
    <div style={{ backgroundColor: '#9994a7', minHeight: '100vh' }}>
      <Banner />
      <LoginSheet />
    </div>
  );
}

export default HomePage;
