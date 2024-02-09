import React from "react";
import Banner from "../components/Banner";
import LoginSheet from "../components/LoginSheet";

function HomePage() {
  return (
    <div style={{ backgroundColor: '#bba0a0', minHeight: '100vh' }}>
      <Banner />
      <LoginSheet />
    </div>
  );
}

export default HomePage;
