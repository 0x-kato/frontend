import React from "react";
import Banner from "../components/Banner";
import RegisterSheet from "../components/RegisterSheet";

function RegisterPage() {
  return (
    <div style={{ backgroundColor: '#bba0a0', minHeight: '100vh' }}>
        <Banner />
        <RegisterSheet />
    </div>
  );
}

export default RegisterPage;
