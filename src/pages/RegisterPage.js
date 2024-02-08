import React from "react";
import Banner from "../components/Banner";
import RegisterSheet from "../components/RegisterSheet";

function RegisterPage() {
  return (
    <div style={{ backgroundColor: '#9994a7', minHeight: '100vh' }}>
        <Banner />
        <RegisterSheet />
    </div>
  );
}

export default RegisterPage;
