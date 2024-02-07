import React from 'react';
import UserForm from './UserForm';
import { register } from "../AuthService";

const Register = () => {
  const handleRegister = async (email, password) => {
    try {
      const data = await register(email, password);
      console.log('Registration successful', data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return <UserForm onSubmit={handleRegister} title="Register" />;
};

export default Register;